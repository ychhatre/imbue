import React from "react";
import Navbar from "./Nav";
import { Card, Form, Button, Container } from "react-bootstrap";

function RoomCard({
  title = "Room 1",
  summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  participants = "Participants: 1",
}) {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>
          {summary}
        </Card.Text>
        <Card.Text>
          {participants}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function Home() {
  return (
    <div style={{ background: "#222629", height: "100vh", width: "300%" }}>
      {/* <Navbar/> */}
      <RoomCard />
    </div>
  );
}

export default Home;
