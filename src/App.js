import SignUp from "./components/signUp";
import React from "react";
import SignIn from "./components/signIn";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Settings from "./components/Settings";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Companies from "./components/Companies"; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path = "/search/:id" component={Search} />
          <Route path = "/companies" component={Companies} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
