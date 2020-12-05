import React from "react";
import Message from "./components/Message";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllMessages from "./components/AllMessages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/all">
            <AllMessages />
          </Route>
          <Route path="/">
            <Message />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
