import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const { signUp } = useAuth();

  async function handleSubmit(e) {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      await signUp(name, password, email);
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div
        style={{
          background: "#222629",
          height: "100vh",
          color: "white",
          padding: "10%",
        }}
      >
        <Container style={{ width: "30%" }}>
          <Card style={{ background: "#222629" }} text="white">
            <Card.Header>Sign Up</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-4"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      background: "#222629",
                      color: "white",
                      marginBottom: "5%",
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-4"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      background: "#222629",
                      color: "white",
                      marginBottom: "5%",
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    style={{
                      background: "#222629",
                      color: "white",
                      marginBottom: "5%",
                    }}
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Form.Check
                    custom
                    type="radio"
                    id="custom-radio"
                    label="Entrepreneur"
                    name="radio"
                  />
                  <Form.Check
                    custom
                    name="radio"
                    type="radio"
                    id="custom-radio"
                    label=" Investor"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  style={{ width: "100%", background: "#51c4d3" }}
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
