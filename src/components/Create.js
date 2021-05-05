import React from "react";
import Navbar from "./Nav";
import { useAuth } from "../contexts/AuthContext";
export default function Create() {
  const { currentUser } = useAuth();

  console.log("CurrentUser is: ", currentUser.email);
  return (
    <div style={{ background: "#3a3b3c", height: "100vh" }}>
      <Navbar title="Create" />
     
    </div>
  );
}
