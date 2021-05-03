import SignUp from "./signUp";
import React from "react";
import SignIn from "./signIn";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/signup">
          <SignUp /> 
        </Route>
        <Route path = "/signin">
          <SignIn /> 
        </Route>
        <Route path = "/home">
          <Nav /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
