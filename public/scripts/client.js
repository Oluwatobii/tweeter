/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function (tweetsArray) {
  // loops through tweets
  tweetsArray.forEach((tweets) => {
    // calls createTweetElement for each tweet
    let newTweet = createTweetElement(tweets);
    // takes return value and appends it to the tweets container
    $("#tweet-container").prepend(newTweet);
  });
};

function htmlEncode(str) {
  return String(str).replace(/[^\w. ]/gi, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}

const createTweetElement = function (tweetData) {
  const $newTweet = `
  <article class="article-tweet">
          <header class="tweet-header">
            <div class="user-info">
              <img class="header-img" src="${tweetData.user.avatars}"/>
              <p>${tweetData.user.name}</p>
            </div>
            <div>
              <h4 class="user-handle">${tweetData.user.handle}</h4>
            </div>
          </header>
          <p class="tweet">
          ${htmlEncode(tweetData.content.text)}
          </p>
          <footer class="tweet-footer">
            <div>
              <p>${String(new Date(tweetData.created_at)).slice(3, 15)}</p>
            </div>
            <div class='widgets'>
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>
  `;

  return $newTweet;
};

$(document).ready(function () {
  //Fetching tweets with Ajax
  const loadTweets = function () {
    $("#tweet-container").empty();
    $.ajax({
      type: "GET",
      url: "/tweets",
    }).then((response) => {
      renderTweets(response);
    });
  };
  loadTweets();

  //Form Submission using JQuery
  $("#target").submit(function (event) {
    event.preventDefault();
    const myData = $(this).serialize();
    const myDataVal = $("#tweet-text").val().length;

    if (myDataVal === 0) {
      $("#empty-box").slideDown(200, function () {});
      $("#long-tweet").slideUp(200, function () {});
    } else if (myDataVal > 140) {
      $("#long-tweet").slideDown(200, function () {});
      $("#empty-box").slideUp(200, function () {});
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: myData,
      }).then(() => {
        loadTweets();
        $("#tweet-text").val("");
        $(".counter").val("140");
        $("#empty-box").slideUp(200, function () {});
        $("#long-tweet").slideUp(200, function () {});
      });
    }
  });
});
