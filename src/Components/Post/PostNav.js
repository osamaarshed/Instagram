import React from 'react';
import imrankhan from './../../Images/imrankhan.jpg';
import './../../Css/PostNav.css';
import { MdVerified } from 'react-icons/md';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
function PostNav() {
  return (
    <div className='imrankhan-container d-flex align-items-center text-light'>
      <div className='row w-100 mx-1 my-2'>
        <div className='col-lg-1'>
          <img src={imrankhan} className='imrankhan ' alt='imrankhan' />
        </div>
        <div className='col-lg-3 position-relative'>
          {/* <div className='row '> */}
          <p className='p1-style position-absolute top-0 start-0 '>
            imrankhan.pti <MdVerified className='text-primary' />
            <br />
            <span className='p2-style'> imrankhan.pti . Original audio</span>
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default PostNav;
