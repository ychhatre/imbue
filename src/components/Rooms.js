import React from "react";
import Navbar from "./Nav";
import { makeStyles } from "@material-ui/core"; 
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Rooms() {
  return (
    <div style={{ background: "#3a3b3c", height: "100vh" }}>
      <Navbar title="Rooms" />
      <div class="card">
        <div class="container">
          <h4>
            <b>Room</b>
          </h4>
          <p>Summary: Blah Blah Blah</p>
          <p>Participants: 1 </p>
        </div>
      </div>
    </div>
  );
}
