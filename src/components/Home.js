import React from "react";
import Navbar from "./Nav";
import { useAuth } from "../contexts/AuthContext"; 
import { makeStyles, Typography} from "@material-ui/core"; 
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  card: {
    height: "40vh",
    width: "80vh",
    transition: "0.3s",
    backgroundColor: "#86c232",
    borderRadius: "20px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: fade("#86c232", 0.5)
    },
  },
  container: {
    padding: "2px 40px",
    width: "5px",
    height: "200px",
  },
  h4: {
    color: "white",
    fontSize: "50px",
    padding: "5px"
  },
  p: {
    color: "white",
    fontSize: "15px",
    padding: "20px",
    justifyContent: "center"
  },
  p2: {
    color: "white",
    fontSize: "15px",
  },
}));

function RoomCard({ title = "Room 1", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", participants = "Participants: 1" }) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Typography className={styles.h4}>
          {title}
        </Typography>
        {/* <h4>
          <b>{title}</b>
        </h4> */}
        <Typography className = {styles.p}>
          {summary}
          </Typography>
          <Typography className = {styles.p2}>
          {participants}
          </Typography>
      </div>
    </div>
  );
}
function Home() {
  const { currentUser } = useAuth();
  return (
    <div style={{ background: '#222629', height: '100vh',}}>
      <Navbar title="Imbue"/>
      <RoomCard /> 
    </div>
  );
}

export default Home;
