import React from "react";
// import React, { createContext } from "react";
import PostNav from "./PostNav";
import PostImage from "./PostImage";
import BelowPost from "./BelowPost";
import imrankhan from "./../../Images/imrankhan.jpg";
import khan from "./../../Images/insta-post1.jpg";
import PostData from "./../../Json/PostData.json";

// const PostProps = createContext();

function Post() {
  return (
    <div>
      {/* <PostProps.Provider> */}
      {PostData.map((users, index) => (
        <PostNav
          key={index}
          profileImage={imrankhan}
          username={users.username}
          description={users.description}
        />
      ))}
      <PostImage postImage={khan} />
      <BelowPost />
      {/* </PostProps.Provider> */}
    </div>
  );
}

export default Post;
