import React from "react";
import "./Tweet.css";
// import "./all.min.css";
// import "./fontawesome.min.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <article class="article-tweet">
      <header class="tweet-header">
        <div class="user-info">
          <img class="header-img" src={profile_image} />
          <p>{name}</p>
        </div>
        <div>
          <h4 class="user-handle">{handle}</h4>
        </div>
      </header>
      <p class="tweet">{text}</p>
      <footer class="tweet-footer">
        <div>
          <p>{date}</p>
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
