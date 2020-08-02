import React from "react";

export const Navigation = () => {
  return (
    <nav class="main-nav">
      <div>tweeter</div>
      <div class="arrow-header">
        <span id="new-tweet">
          {" "}
          <strong>Write</strong> a new tweet
        </span>
        <span id="arrow-point">
          {" "}
          <i class="fas fa-angle-double-down"></i>{" "}
        </span>
      </div>
    </nav>
  );
};
