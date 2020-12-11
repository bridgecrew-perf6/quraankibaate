import React from "react";
import Message from "./components/Message";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllMessages from "./components/AllMessages";
import EMessage from "./components/EMessage";
import EAllMessages from "./components/EAllMessages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/all">
            <AllMessages />
          </Route>

          {/* <Route path="/english">
            <EMessage />
          </Route>
          <Route path="/allEnglish">
            <EAllMessages />
          </Route> */}
          <Route path="/">
            <Message />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
