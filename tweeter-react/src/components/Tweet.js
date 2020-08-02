import React from "react";
import "./Tweet.css";
// import "./all.min.css";
// import "./fontawesome.min.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <article className="article-tweet">
      <header className="tweet-header">
        <div className="user-info">
          <img className="header-img" src={profile_image} />
          <p>{name}</p>
        </div>
        <div>
          <h4 className="user-handle">{handle}</h4>
        </div>
      </header>
      <p className="tweet">{text}</p>
      <footer className="tweet-footer">
        <div>
          <p>{date}</p>
        </div>
        <div className="widgets">
          <i className="fas fa-flag"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  );
};
