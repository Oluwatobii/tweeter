import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main class="container">
        <TweetForm />
        <Tweet />
      </main>
    </div>
  );
}

export default App;
