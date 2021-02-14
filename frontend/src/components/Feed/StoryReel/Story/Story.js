import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div className="story">
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
      <img src={image} />
    </div>
  );
}

export default Story;
