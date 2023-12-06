  import React, { useState } from "react";
  import LockOpenIcon from "@mui/icons-material/LockOpen";

  import { Link } from "react-router-dom";
  import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import { Alert,  Avatar,  Button, Checkbox, Collapse, FormControlLabel, FormGroup, Paper, TextField, Typography } from "@mui/material";
  import Grid from "@mui/material/Grid";

  function Login() {
       const [email, setEmail] = useState<string>("");
       const [password, setPassword] = useState<string>();
       const [message, setMessage] = useState<string>();
       const [open, setOpen] = useState<boolean>(false);

const validateEmail = ()  => {
  const emailcheck = email

  if (validator.isEmail(emailcheck)) {
    setMessage("Thank you");
  } else {
    setMessage("Please, enter valid Email!");
  }
  
};

    const paperStyle = {
      padding: "20px",
      height: "70vh",
      margin: "20px auto",
      fontWeight: "bolder",
      width: 400,
    };

    const avatarStyle = {
      margin: "20px auto",
      backgroundColor: "green",
    };

    const inputStyle = {
      marginTop: "20px",
    };

 
    async function handleLogin() {
      try {
        await axios
          .post("http://localhost:3000/user/login", {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.data.message === "success") {
              
              alert("success");
              
            }
          })
          .catch((Error) => {
            if (Error.response.data.err == "usernotexists") {
              
              setMessage("USER NOT EXIST")
              setOpen(true)
              setTimeout(() => {
                setOpen(false);
                setMessage("");
              }, 5000);
            } else if (Error.response.data.err == "wrong-password") {
           setMessage("WRONG PASSWORD");
           setOpen(true);
           setTimeout(() => {
             setOpen(false);
             setMessage("");
           }, 5000);
            }
          });
      } catch (error) {}
    }


    return (
      <Grid container className="h-1">
        <Paper elevation={10} style={paperStyle}>
          <Grid container direction="column" alignItems="center">
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <Typography variant="h5">SIGN IN</Typography>
            <Grid style={inputStyle}>
              <TextField
                id="standard-basic"
                label="Email"
                placeholder="Enter username"
                variant="standard"
                fullWidth
                required
                error={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Password"
                placeholder="Enter Password"
                variant="standard"
                fullWidth
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </FormGroup>
              <Button
                type="submit"
                onClick={handleLogin}
                variant="contained"
                fullWidth
                color="primary"
              >
                sign in
              </Button>
            </Grid>
          </Grid>
          <Grid className="mt-4 text-left">
            <Typography>
              <link className="curson-pointer"></link>Forgot password ..?
            </Typography>

            <Typography>
              Don't have an account?
              <Link to="signup">Sign up here..!</Link>
            </Typography>
          </Grid>
          <Collapse in={open} timeout={2000}>
            <Alert variant="filled" severity="error">
              {message}
            </Alert>
          </Collapse>
        </Paper>
      </Grid>
    );
  }

  export default Login;
