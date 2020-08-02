import React from "react";
import "./Tweet.css";

export const Tweet = () => {
  return (
    <article class="article-tweet">
      <header class="tweet-header">
        <div class="user-info">
          <img class="header-img" src="${tweetData.user.avatars}" />
          <p>Oluwatobi Bello</p>
        </div>
        <div>
          <h4 class="user-handle">@Darkister</h4>
        </div>
      </header>
      <p class="tweet">What do you think of the latest one piece chapter</p>
      <footer class="tweet-footer">
        <div>
          <p>1 hour ago</p>
        </div>
        <div class="widgets">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  );
};
