import React from "react";
import Navbar from "./Nav";
import { useAuth } from "../contexts/AuthContext"; 
function Home() {
  const { currentUser } = useAuth();
  console.log("CurrentUser: ",currentUser); 
  return (
    <div style={{ background: '#222629', height: '100vh',}}>
      <Navbar title="Imbue"/>
    </div>
  );
}

export default Home;
