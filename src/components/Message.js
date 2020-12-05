import React from "react";
import Data from "../data/data.json";
import "./Message.css";

import Fab from "@material-ui/core/Fab";
import AutorenewIcon from "@material-ui/icons/Autorenew";
const Message = () => {
  const messages = Data.main;
  const message = messages[Math.floor(Math.random() * messages.length)];

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <div className="message">
        <div className="message__text">
          <h1>{message.message}</h1>
        </div>
        <div className="message__source">
          <h3>{message.source}</h3>
        </div>

        <div className="message__button">
          <Fab variant="extended" color="primary" onClick={refreshPage}>
            <AutorenewIcon className="message__buttonIcon" />
            Get New One
          </Fab>
        </div>
      </div>
    </>
  );
};

export default Message;
