import React from "react";
import { Tweets } from "../components/Tweets";

export default { title: "Tweet Container" };

export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
    {
      name: "Oluwatobi Bello",
      handle: "@Darkister",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "What do you think of One Piece Chapter 986",
      date: "50 mins ago",
    },
    {
      name: "Bola Aransiola",
      handle: "@Hafsoh",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "Hello World",
      date: "1 hour ago",
    },
  ];
  return <Tweets tweetData={tweets} />;
};
