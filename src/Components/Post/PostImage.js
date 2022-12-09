import React from "react";
import "./../../Css/PostImage.css";

function PostImage(props) {
  return (
    <div className="container-fluid postimage-container">
      <img
        src={props.postImage}
        className="w-100 img-fluid mw-100 h-auto"
        alt="khan"
      />
    </div>
  );
}

export default PostImage;
