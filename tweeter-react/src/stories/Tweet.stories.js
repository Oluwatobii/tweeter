import React from "react";
import { Tweet } from "../components/Tweet";

export default { title: "Singular Tweet" };

export const emptyTweet = () => <Tweet />;

export const populatedTweet = () => {
  const singleTweet = {
    name: "Oluwatobi Bello",
    handle: "@Darkister",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "What do you think of One Piece Chapter 986",
    date: "50 mins ago",
  };
  return (
    <Tweet
      name={singleTweet.name}
      handle={singleTweet.handle}
      profile_image={singleTweet.profile_image}
      text={singleTweet.text}
      date={singleTweet.date}
    />
  );
};
