import React from "react";
import Navbar from "./Nav";
import { useAuth } from "../contexts/AuthContext";
import { makeStyles } from "@material-ui/core";
import { Card, Form, Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  form: {
    paddingLeft: "50px"
  }
}));


export default function Create() {

  const { currentUser } = useAuth();

  return (
    <div style={{ background: "#3a3b3c", height: "100vh" }}>
      <Navbar title="Create" />
      <form className = "form">
        <p>Title:</p>
        <input
          type="text"
        />
        <p>Summary of Room:</p> 
        <input
          type="text"
        />
      </form>
    </div>
  );
}
