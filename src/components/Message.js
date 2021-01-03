import React, { useState } from "react";
import Data from "../data/data.json";
import "./Message.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Fab from "@material-ui/core/Fab";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Link } from "react-router-dom";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  // snackbar
  const notify = () => {
    navigator.clipboard.writeText(`${message.message}\n${message.source}`).then(
      function () {
        toast.success("Successfully Copied", {
          position: toast.POSITION.TOP_CENTER,
        });
      },
      function () {
        /* clipboard write failed */
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    );
  };
  // end snackbar
  const messages = Data.main;
  const message = messages[Math.floor(Math.random() * messages.length)];

  const [value, setValue] = useState();
  const refresh = () => {
    setValue({});
  };

  return (
    <>
      <div className="message">
        <div className="messages__translate">
          <Link to="/english">
            <Button>
              <GTranslateIcon />
            </Button>
          </Link>
        </div>

        <div className="message__text">
          <h1>{message.message}</h1>
        </div>
        <div className="message__copyBtn">
          <Button onClick={notify}>Copy to clipboard</Button>
          <ToastContainer autoClose={3000} />
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
