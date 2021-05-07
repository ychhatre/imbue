import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import bcrypt from "bcryptjs"; 
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#86c232"
    },
    secondary: {
      main: "#222629"
    }
  }
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#222629"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#86c232",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    alignItems: "center",
    borderColor: "white",
    color: "white"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#86c232",
    '&:hover': {
      backgroundColor: '#222629',
      color: 'white',
    },
  },
  link: {
    align: "center",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    color: "white",
    outlineColor: "white"
  }
}));

export default function SignUp() {
  const classes = useStyles();
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
      const hashedPassword =  await bcrypt.hash(password, 10);
      await signUp(name, hashedPassword, email);
      history.push("/home");
    } catch (error) {
      
    }
  }


  return (
    <div style={{ background: '#222629', height: '120vh', color:"white" }} className={classes.root}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5" style={{color: "white"}}>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <ThemeProvider theme={customTheme}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
                autoComplete="fname"
                name="firstName"
                variant="standard"
                
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                style={{borderColor: "white"}}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
               InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                className: classes.input
              }}
                variant="standard"
                
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "white"}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
                variant="standard"
                
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
          </Grid>
              </ThemeProvider>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
                <Link href="/signIn" variant="body2" style={{ color: "white", textAlign: "center" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}
