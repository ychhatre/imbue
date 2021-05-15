import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import {
  Card,
} from "react-bootstrap";


function CompanyCard({
  title = "Company Name",
  summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}) {
  return (
    <Card style={{ width: "30rem", backgroundColor: "#51c4d3", borderRadius: "1vh", margin: "5vh" }}>
      <Card.Body>
          <Card.Text style={{ color: "white", fontSize: 25}} href="#">{title}</Card.Text>
        <Card.Text style={{ color: "white" }}>{summary}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function Companies() {

  // state = {
  //   company: null
  // }

  // async componentDidMount() {
  //   const url = ""
  // }
  return (
    <div style={{ backgroundColor: "#222629", height: "100vh"}}>
      <NavBar />
      <CompanyCard />
    </div>
  );
}