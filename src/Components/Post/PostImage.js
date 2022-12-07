import React from "react";

function PostImage(props) {
  return (
    <div>
      <img src={props.postImage} className="w-100" alt="khan" />
    </div>
  );
}

export default PostImage;
