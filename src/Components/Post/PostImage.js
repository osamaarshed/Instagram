import React from 'react';
import khan from './../../Images/insta-post1.jpg';

function PostImage() {
  return (
    <div>
      <img src={khan} className='w-100' alt='khan' />
    </div>
  );
}

export default PostImage;
