import React from "react";
import "./TweetForm.css";

export const TweetForm = () => {
  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <h4 id="empty-box">
        <img className="error" src="/images/error.png" /> Compose Tweet Box is
        Empty! Please Compose a tweet
        <img className="error" src="/images/error.png" />
      </h4>
      <h4 id="long-tweet">
        <img className="error" src="/images/error.png" />
        Your tweet is too long, The maximum is 140 characters. Reduce the
        character limit
        <img className="error" src="/images/error.png" />
      </h4>
      <form id="target" className="form-inline" action="/tweets" method="POST">
        <label className="hidden" for="tweet-text">
          What are you humming about?
        </label>
        <textarea
          className="textarea"
          name="text"
          id="tweet-text"
          placeholder="What are you humming about?"
        ></textarea>
        <div className="buttton-char">
          <button id="create-new-tweet" className="button" type="submit">
            Tweet
          </button>
          <output name="counter" className="counter" for="tweet-text">
            140
          </output>
        </div>
      </form>
    </section>
  );
};
