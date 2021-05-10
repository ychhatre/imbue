import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {Container, Jumbotron, Button, Form} from "react-bootstrap";

// const customTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#86c232"
//     },
//     secondary: {
//       main: "#222629"
//     }
//   }
// });
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     backgroundColor: "#222629"
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: "#86c232",
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//     borderColor: "#86c232",
  
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#86c232",

//     '&:hover': {
//       backgroundColor: '#222629',
//       color: 'white',
//       borderColor: "#86c232"
//     },

//   },
//   input: {
//     color: "white",
//   }
// }));

export default function SignIn() {
  // const classes = useStyles();
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
  // const signIn = async (e) => {
  //   const response = await fetch(
  //     "https://imbue-backend.herokuapp.com/users/login",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const responseData = await response.json();

  //   if (responseData["status"] === "success") {
  //     history.push("/home");
  //   } else if (responseData["status"] === "incorrect password") {
  //     alert("The password is incorrect");
  //   } else {
  //     alert("The email is incorrect");
  //   }
  //   e.preventDefault();
  // };

  return (
    // <div style={{ background: '#222629', height: '100vh', color:'white' }}>
    // <Container component="main" maxWidth="xs" className={classes.root}>
    //   <CssBaseline />
    //   <div className={classes.paper}>
    //     <Avatar className={classes.avatar}></Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     <form className={classes.form} noValidate>
    //       <ThemeProvider theme={customTheme}>
    //       <TextField
    //         variant="standard"
    //         margin="normal"
    //         InputLabelProps={{
    //           className: classes.input
    //         }}
    //         InputProps={{
    //           className: classes.input
    //         }}
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //         color="primary"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <TextField
    //         color="primary"
    //         InputProps={{
    //           className: classes.input
    //         }}
    //         InputLabelProps={{
    //           className: classes.input
    //         }}
    //         variant="standard"
    //         margin="normal"
    //         Inp
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       </ThemeProvider>
    //       <Button
    //         // type="submit"
    //         fullWidth
    //         variant="contained"
    //         color="primary"
    //         className={classes.submit}
    //         onClick={(e) => handleSubmit(e)}
    //       >
    //         Sign In
    //       </Button>
    //       <Grid container justify="center">
    //         <Grid item>
    //           <Link href="/signUp" style={{color: "white", textAlign: "center"}}>
    //             Don't have an account? Sign Up
    //           </Link>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </div>
    // </Container>
    // </div>
    // <>
    //   <Jumbotron style= {{ backgroundColor: ""}}>
    //     <h1>Hello, world!</h1>
    //     <p>
    //       This is a simple hero unit, a simple jumbotron-style component for
    //       calling extra attention to featured content or information.
    //     </p>
    //     <p>
    //       <Button variant="primary">Learn more</Button>
    //     </p>
    //   </Jumbotron>
    // <div style={{ backgroundColor: "black"}}>
    <>
      <div style={{ background: "#222629", height: "100vh", color: "white" }}>
        <Container style={{ width: "50%" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        </div>
      </>
      //{" "}
 
  );
}
