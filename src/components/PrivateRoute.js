import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...options }) {
  const { currentUser } = useAuth();
  console.log("CurrentUser: ", currentUser);  
  return (
      <Route
        {...options}
        render={(props) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signIn"></Redirect>
          );
        }}
      ></Route>
  );
}