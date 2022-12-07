import React from "react";
import "./../../Css/PostNav.css";
import { MdVerified } from "react-icons/md";
function PostNav(props) {
  return (
    <div className="imrankhan-container d-flex align-items-center text-light">
      <div className="row w-100 mx-1 my-2">
        <div className="col-lg-1">
          <img
            src={props.profileImage}
            className="imrankhan "
            alt="imrankhan"
          />
        </div>
        <div className="col-lg-3 position-relative">
          <p className="p1-style position-absolute top-0 start-0 ">
            {props.username} <MdVerified className="text-primary" />
            <br />
            <span className="p2-style"> {props.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostNav;
