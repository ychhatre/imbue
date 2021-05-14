import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {Container, Button, Form, Card} from "react-bootstrap";


export default function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div style={{ background: "#222629", height: "100vh", color: "white", padding: "10%"}}>
        <Container style={{width: "30%"}}>
        <Card
            style={{ background: "#222629"}}

            text='white'

        >
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
            
              <Form onSubmit={handleSubmit} >
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-4"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ background: "#222629", color: "white", marginBottom: "5%" }}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    style={{background: "#222629", color:"white", marginBottom:"5%"}}
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" style={{ width: "100%", background:"#51c4d3"}}>
                  Submit
            </Button>
            </Form>
          </Card.Body>
        </Card>
        <div>
          Need an account? <Link to="/signup"> Sign Up</Link>
        </div>
          
        </Container>
        </div>
      </div>
 
  );
}
