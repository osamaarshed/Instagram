import React from "react";
import Nav from "../Nav/Nav";
import MessagesList from "./MessagesList";
import MessagesNav from "./MessagesNav";
import imrankhan from "./../../Images/imrankhan.jpg";
import MessagesData from "./../../Json/MessagesData.json";

function Messages() {
  return (
    <>
      <Nav />
      <MessagesNav />
      {MessagesData.map((data, index) => (
        <>
          <MessagesList
            image={imrankhan}
            username={data.username}
            message={data.message}
          />
        </>
      ))}
    </>
  );
}

export default Messages;
