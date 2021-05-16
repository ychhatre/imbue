import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import { Card } from "react-bootstrap";

function RoomCard({
  title,
  description,
  timeCreated,
  urlToRoom,
}) {
  return (
    <Card
      style={{
        width: "50rem",
        backgroundColor: "#51c4d3",
        borderRadius: "1vh",
        margin: "5vh",
      }}
    >
      <Card.Body>
        <Card.Text style={{ color: "white", fontSize: 25 }}>{title}</Card.Text>
        <Card.Text style={{ color: "white" }}>{description}</Card.Text>
        <Card.Text style={{ color: "white" }}>
          {timeCreated.slice(5, 10)}
        </Card.Text>
        <Card.Link href={urlToRoom} style={{ color: "white" }}>
          Join Room
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default function Home() {
  const [rooms, setRooms] = useState();
  const [loading, setLoading] = useState(true); 
  async function getRooms() {
    let tempRooms =[]; 
    const response = await fetch("https://api.daily.co/v1/rooms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const dailyRooms = (await response.json()).data; 
    console.log(dailyRooms); 
    for (let room of dailyRooms) {
      const roomID = room.id
      const apiResponse = await fetch(`https://imbue-backend.herokuapp.com/rooms/${roomID}`, {
      
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      room.description = (await apiResponse.json()).description;
      tempRooms.push(room);
      console.log(tempRooms); 
    }
    setRooms(tempRooms);
    setLoading(false); 
    
  }
  useEffect(() => {
    console.log(rooms); 
    getRooms();
  }, [rooms]);
  return (
    <div style={{ backgroundColor: "#222629", height: "100vh" }}>
      <NavBar />
      {!loading && rooms.map((room) => (
        <RoomCard
          title={room.name}
          key={room.id}
          timeCreated={room.created_at}
          urlToRoom={room.url}
          description={room.description}
        />
      ))}
    </div>
  );
}
