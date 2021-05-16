import SignUp from "./components/signUp";
import React from "react";
import SignIn from "./components/signIn";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Settings from "./components/Settings";
import PrivateRoute from "./components/PrivateRoute";
import Companies from "./components/Companies"; 
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


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
          <PrivateRoute path = "/companies" component={Companies} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
