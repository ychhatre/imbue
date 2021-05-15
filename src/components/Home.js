import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import {
  Card,
} from "react-bootstrap";

function RoomCard({
  title,
  summary = "Hi this is a template card!",
  urlToRoom,
  timeCreated,
}) {
  return (
    <a style={{ cursor: 'pointer', color: "white", textDecoration: "none"}} href = {urlToRoom}>
    <Card style={{ width: "50rem", backgroundColor: "#51c4d3", borderRadius: "1vh", margin: "5vh" }}>
      <Card.Body>
          <Card.Text style={{ color: "white", fontSize: 25}} href="#">{title}</Card.Text>
        <Card.Text style={{ color: "white" }}>{summary}</Card.Text>
        <Card.Text style={{ color: "white"}} href="#">{timeCreated.slice(5,10)}</Card.Text>
        <span className="dot"></span>
      </Card.Body>
    </Card>
    </a>
  );
}

export default function Home() {
  const [rooms, setRooms] = useState([]);
  async function getRooms() {
    const response = await fetch("https://api.daily.co/v1/rooms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const data = await response.json();
    setRooms(data.data);
  }
  useEffect(() => {
    getRooms();
  }, []);
  return (
    <div style={{ backgroundColor: "#222629", height: "100vh"}}>
      <NavBar />
      {rooms.map((room) => (
       
        <RoomCard title={room.name} key={room.id} urlToRoom={room.url} timeCreated={room.created_at}/>
      ))}
    </div>
  );
}
