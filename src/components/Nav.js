import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import logo from "../../public/logo.png"; 

import { Form, Navbar, Nav, Button, Modal } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function CreateModal(props) {
  const [name, setName] = useState("");

  async function handleCreate() {
    const finalName = name.toLowerCase().replace(/\s+/g, "");
    await fetch("https://api.daily.co/v1/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          enable_network_ui: false,
          enable_prejoin_ui: true,
          enable_screenshare: true,
          enable_chat: true,
          start_video_off: true,
        },
        privacy: "public",
        name: finalName,
      }),
    });
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      variant="dark"
      style={{ background: "#222629" }}
    >
      <Modal.Header style={{ textAlign: "center" }}>
        <Modal.Title
          style={{ textAlign: "center" }}
          id="on tained-modal-tit le-vcenter"
        >
          Create A Room
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onClick={handleCreate}>
          <Form.Group controlId="name">
            <Form.Label>Room Name</Form.Label>
            <Form.Control
              type="text"
              className="mb-4"
              placeholder="Name of Room"
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "5%" }}
              required
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={{ marginBottom: "5%" }}
              type="text"
              placeholder="Enter Desription"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            style={{ width: "100%", background: "#51c4d3" }}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function CreateCompanyModal(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState();
  const { currentUser } = useAuth();


  async function handleCreate() {
    const response = await fetch("https://imbue-backend.herokuapp.com/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        owner: currentUser._id,
      }),
    });
    console.log(await response.json()); 
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      variant="dark"
      style={{ background: "#222629" }}
    >
      <Modal.Header style={{ textAlign: "center" }}>
        <Modal.Title
          style={{ textAlign: "center" }}
          id="on tained-modal-tit le-vcenter"
        >
          Create A Company
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#222629s" }}>
        <Form onSubmit={handleCreate}>
          <Form.Group controlId="name">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              className="mb-4"
              placeholder="Name of Room"
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "5%" }}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Company Description</Form.Label>
            <Form.Control
              style={{ marginBottom: "5%" }}
              type="text"
              placeholder="Enter Desription"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            style={{ width: "100%", background: "#51c4d3" }}
            onClick={handleCreate}
          >
            Create Company
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default function NavBar(props) {
  const history = useHistory();
  const { signOut } = useAuth();  
  const [modalShow, setModalShow] = React.useState(false);
  const [modalCreateShow, setCreateModalShow] = React.useState(false);
  return (
    <Navbar
      style={{ height: "10vh", paddingLeft: "2vh", paddingRight: "2vh" }}
      bg="dark"
      variant="dark"
    >
      <Nav className="container-fluid">
        <Nav.Item>
          <Navbar.Brand style={{ color: "#51c4d3", fontSize: "30px" }} to="/">
            Imbue
          </Navbar.Brand>
        </Nav.Item>
        <Nav>
        <Nav.Link href = "/companies"> Companies </Nav.Link>
          <Nav.Link onClick={() => setModalShow(true)}> Create Room </Nav.Link>
          <CreateModal show={modalShow} onHide={() => setModalShow(false)} />
          <Nav.Link onClick={() => setCreateModalShow(true)}>
            Create Company
          </Nav.Link>
          <CreateCompanyModal
            show={modalCreateShow}
            onHide={() => setCreateModalShow(false)}
          />
          <Nav.Link onClick={() => {
            signOut();
            history.push("/signin") 
          }}>Logout</Nav.Link>
        </Nav>
      </Nav>
    </Navbar>
  );
}
