import SignUp from "./components/Auth/signUp";
import React from "react";
import SignIn from "./components/Auth/signIn";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Create from "./components/Create";
import Settings from "./components/Settings";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/create" component={Create} />
          <PrivateRoute path="/settings" component={Settings} />
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
