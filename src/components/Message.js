import React, { useState } from "react";
import Data from "../data/data.json";
import "./Message.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Fab from "@material-ui/core/Fab";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Link } from "react-router-dom";

const Message = () => {
  const messages = Data.main;
  const message = messages[Math.floor(Math.random() * messages.length)];

  const [value, setValue] = useState();
  const refresh = () => {
    setValue({});
  };

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
          <Fab variant="extended" color="primary" onClick={refresh}>
            <AutorenewIcon className="message__buttonIcon" />
            Get New One
          </Fab>
        </div>
        <div className="message__all">
          <Link to="/all">
            <Fab variant="extended" color="primary">
              <ArrowForwardIosIcon className="message__buttonIcon" />
              All
            </Fab>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Message;
