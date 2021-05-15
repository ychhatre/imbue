import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import {
  Card,
} from "react-bootstrap";


function CompanyCard({
  title,
  description 
}) {
  return (
    <Card style={{ width: "30rem", backgroundColor: "#51c4d3", borderRadius: "1vh", margin: "5vh" }}>
      <Card.Body>
          <Card.Text style={{ color: "white", fontSize: 25}} href="#">{title}</Card.Text>
        <Card.Text style={{ color: "white" }}>{description  }</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function Companies() {

  const [companies, setCompanies] = useState([])
  async function getCompanies() {
    const response = await fetch("https://imbue-backend.herokuapp.com/companies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const companies = await response.json();
    console.log(companies); 
    setCompanies(companies); 
  }
  useEffect(() => {
    getCompanies(); 
  }, [])
  return (
    <div style={{ backgroundColor: "#222629", height: "100vh"}}>
      <NavBar />
      {companies.map(company => (
        <CompanyCard key={company._id} title={company.name} description={company.description} />
      ))}
      
    </div>
  );
}