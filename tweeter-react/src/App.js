import React, { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";

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
  const tweets = tweetData.map((tweetData, index) => {
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
  });

  const addNewTweet = () => {
    const newTweet = {
      name: "Bola Aransiola",
      handle: "@Hafsoh",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "Hello World",
      date: "1 hour ago",
    };

    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <div className="main-container" onClick={addNewTweet}>
      <Navigation />
      <Profile />
      <main class="container">
        <TweetForm />
        <section className="tweet-container">{tweets}</section>
      </main>
    </div>
  );
}

export default App;
