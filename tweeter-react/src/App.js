import React, { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
//import { Tweet } from "./components/Tweet";
import { Tweets } from "./components/Tweets";

const initialTweetData = [
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

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const addNewTweet = (text) => {
    const newTweet = {
      name: "Oluwatobi Bello",
      handle: "@Darkister",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text,
      date: "1 hour ago",
    };

    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main class="container">
        <TweetForm addNewTweet={addNewTweet} />
        <Tweets tweetData={tweetData} />
      </main>
    </div>
  );
}

export default App;
