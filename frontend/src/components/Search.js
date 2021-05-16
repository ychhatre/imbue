import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBar from "./Nav";

function UserCard({ displayName, email }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> {displayName} </Card.Title>
          <Card.Text> {email} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default function Search() {
  let { id } = useParams();
  const [users, setUsers] = React.useState();
  const [loading, setLoading] = React.useState(true); 

  async function getUsers() {
    const response = await fetch(
        `https://imbue-backend.herokuapp.com/users?searchTerm=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
  }

  useEffect(() => {
    getUsers(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
  <div>
      <NavBar />
      {!loading && users.map(user => (
          <UserCard displayName={user.name} email={user.email} />
      ))}
  </div>); 
}
