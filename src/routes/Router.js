import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "~/pages/Home";
import NotFound from "~/pages/NotFound";
import ProgramDetail from "~/pages/ProgramDetail";

export default function CustomRouter(props) {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/program/:id" component={ProgramDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
