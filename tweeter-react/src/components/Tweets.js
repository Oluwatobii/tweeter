import React from "react";
import { Tweet } from "./Tweet";

export const Tweets = (props) => {
  const { tweetData } = props;
  const tweets = tweetData
    ? tweetData.map((tweetData, index) => {
        return (
          <Tweet
            key={index}
            name={tweetData.name}
            handle={tweetData.handle}
            text={tweetData.text}
            profile_image={tweetData.profile_image}
            date={tweetData.date}
          />
        );
      })
    : "There is no tweet here";

  return <section className="tweet-container">{tweets}</section>;
};
