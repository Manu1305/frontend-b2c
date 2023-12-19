import React, { useEffect, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from 'yup';
import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { decodeToken, useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../rootStackParams";
import { useDispatch } from "react-redux";

type authScreenProp = StackNavigationProp<RootStackParamList, "Auth">;

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");  

  const navigate = useNavigate();
  const dispatch = useDispatch();
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


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  async function handleLogin() {
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      await axios
        .post("http://localhost:3000/user/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.message === "success") {
            console.log(res.data);
            alert("success");
            localStorage.setItem("token", res.data.user);
            navigate("/");
          }
        })
        .catch((Error) => {
          if (Error.response.data.err == "usernotexists") {
            setMessage("USER NOT EXIST");
            setOpen(true);
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
    } 
    catch (error) {
      
      // Handle validation errors
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          if (err.path === 'email') setEmailError(err.message);
          if (err.path === 'password') setPasswordError(err.message);
        });
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const myDecodedToken = decodeToken(token);
      navigate("/");
    }
    if (!token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, []);

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
              label="Email"
              placeholder="Enter email"
              variant="standard"
              fullWidth
              
              error={!!emailError}
              helperText={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              InputLabelProps={{
                style: { color: "black" } 
              }}
              FormHelperTextProps={{ 
                style: { textAlign: "right" }
              }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              placeholder="Enter Password"
              variant="standard"
              fullWidth
              type="password"
              
              error={!!passwordError}
              helperText={passwordError}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              InputLabelProps={{
                style: { color: "black" } 
              }}
              FormHelperTextProps={{ 
                style: { textAlign: "right" }
              }}
              
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
            <Link to="/signup">Sign up here..!</Link>
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
