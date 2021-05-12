import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import { Card, Form, Navbar, NavDropdown, Nav, FormControl, Button } from "react-bootstrap";

function RoomCard({
  title="h1",
  summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  urlToRoom = "url",
}) {
  return (
    <Card style={{ width: "30rem", backgroundColor: "#51c4d3", borderRadius: "1vh", margin: "5vh" }}>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{title} </Card.Title>
        <Card.Text style={{ color: "white" }}>
          {summary}
        </Card.Text>
        <Card.Text style={{ color: "white" }}>
          <a href={urlToRoom}> Link to Room</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function Home() {
  const [rooms, setRooms] = useState([]);
  async function getRooms() {
    const response = await fetch("https://api.daily.co/v1/rooms", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      // body: JSON.stringify({ properties: { 
      //   enable_network_ui: false
      // }})
    })
    const data = await response.json(); 
    console.log(data.data); 
    setRooms(data.data); 
  }
  useEffect(() => {
    getRooms(); 
  }, [rooms])
  return (
    <div style={{ background: "white" }}>
      <NavBar />
      {rooms.map(room => (
        <RoomCard title={room.name}/>,
        <RoomCard urlToRoom={room.url}/>
      ))}
      <div style={{ background: "black" }}> </div>
    </div>
  );
}


