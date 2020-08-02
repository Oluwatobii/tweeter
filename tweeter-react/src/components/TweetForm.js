import React from "react";
import "./TweetForm.css";

export const TweetForm = () => {
  return (
    <section class="new-tweet">
      <h2>Compose Tweet</h2>
      <h4 id="empty-box">
        <img class="error" src="/images/error.png" /> Compose Tweet Box is
        Empty! Please Compose a tweet
        <img class="error" src="/images/error.png" />
      </h4>
      <h4 id="long-tweet">
        <img class="error" src="/images/error.png" />
        Your tweet is too long, The maximum is 140 characters. Reduce the
        character limit
        <img class="error" src="/images/error.png" />
      </h4>
      <form id="target" class="form-inline" action="/tweets" method="POST">
        <label class="hidden" for="tweet-text">
          What are you humming about?
        </label>
        <textarea
          class="textarea"
          name="text"
          id="tweet-text"
          placeholder="What are you humming about?"
        ></textarea>
        <div class="buttton-char">
          <button id="create-new-tweet" class="button" type="submit">
            Tweet
          </button>
          <output name="counter" class="counter" for="tweet-text">
            140
          </output>
        </div>
      </form>
    </section>
  );
};
