import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Button, Dialog } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { Card, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// function NewRoomModal() {
//   return (
//     <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
//   aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header text-center">
//         <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body mx-3">
//         <div class="md-form mb-5">
//           <i class="fas fa-envelope prefix grey-text"></i>
//           <input type="email" id="defaultForm-email" class="form-control validate"></input>
//           <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
//         </div>

//         <div class="md-form mb-4">
//           <i class="fas fa-lock prefix grey-text"></i>
//           <input type="password" id="defaultForm-pass" class="form-control validate"></input>
//           <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
//         </div>

//       </div>
//       <div class="modal-footer d-flex justify-content-center">
//         <button class="btn btn-default">Login</button>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

export default function Navbar(props) {
  const history = useHistory();
  const { signOut } = useAuth();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
