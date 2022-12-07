import React from "react";
// import React, { createContext } from "react";
import PostNav from "./PostNav";
import PostImage from "./PostImage";
import BelowPost from "./BelowPost";
import imrankhan from "./../../Images/imrankhan.jpg";
import khan from "./../../Images/insta-post1.jpg";

// const PostProps = createContext();

function Post() {
  return (
    <div>
      {/* <PostProps.Provider> */}
      <PostNav
        profileImage={imrankhan}
        username="imrankhan.pti"
        description="imrankhan.pti . Original audio"
      />
      <PostImage postImage={khan} />
      <BelowPost />
      {/* </PostProps.Provider> */}
    </div>
  );
}

export default Post;
