import React from "react";
import Navbar from "./Nav";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "35vh",
    width: "50vh",
    transition: "0.3s",
    backgroundColor: "#2e856e",
    borderRadius: "10px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  container: {
    padding: "2px 40px",
    width: "5px",
    height: "200px",
  },
  h4: {
    color: "white",
  },
  p: {
    color: "white",
  },
}));
function RoomCard({ title, summary, participants }) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{summary}</p>
        <p>{participants} </p>
      </div>
    </div>
  );
}

export default function Rooms() {
  const styles = useStyles();
  return (
    <div style={{ background: "#3a3b3c", height: "100vh" }}>
      <Navbar title="Rooms" />
      <RoomCard title="Test" summary="Lol" participants={3} />
    </div>
  );
}
