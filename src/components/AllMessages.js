import React from "react";
import "./AllMessages.css";
import Data from "../data/data.json";
import { Card, CardContent, Fab, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const AllMessages = () => {
  const messages = Data.main;

  return (
    <div className="allMessages">
      {messages.map((m) => {
        return (
          <Card key={m.id} variant="outlined" className="allMessages__card">
            <CardContent className="allMessages__content">
              <Typography variant="h5" component="h2">
                {m.message}
              </Typography>
              <br />
              <Typography color="textSecondary">{m.source}</Typography>
            </CardContent>
          </Card>
        );
      })}
      <div className="message__button">
        <Link to="/">
          <Fab variant="extended" color="primary">
            <HomeIcon className="message__buttonIcon" />
            Back To Home
          </Fab>
        </Link>
      </div>
    </div>
  );
};

export default AllMessages;
