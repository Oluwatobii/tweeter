import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="main-nav">
      <div>tweeter</div>
      <div className="arrow-header">
        <span id="new-tweet">
          {" "}
          <strong>Write</strong> a new tweet
        </span>
        <span id="arrow-point">
          {" "}
          <i className="fas fa-angle-double-down"></i>{" "}
        </span>
      </div>
    </nav>
  );
};
