import React from "react";
import "./Feed.css";
import Story from "./StoryReel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <h1>I am Feed</h1>
      {/* Story*/}
      <Story />
      {/* Message*/}
    </div>
  );
}

export default Feed;
