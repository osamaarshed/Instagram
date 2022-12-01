import React from 'react';
import PostNav from './PostNav';
import PostImage from './PostImage';
import BelowPost from './BelowPost';

function Post() {
  return (
    <div>
      <PostNav />
      <PostImage />
      <BelowPost />
    </div>
  );
}

export default Post;
