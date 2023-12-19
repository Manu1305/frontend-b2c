import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from 'yup';

const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = React.useState<string>("");
  const [lastName,setLastName]=React.useState<string>("")
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<any>();
  const [password, setPassword] = React.useState<string>("");
  const [errors, setErrors] = React.useState<any>({});
  const Navigate =useNavigate()


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number should only contain numbers'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  const handleSignup = async () => {
  
    try {
      await validationSchema.validate({ name, lastName, email, phone, password }, { abortEarly: false });
      await axios
        .post("http://localhost:3000/user/signup", {
          name: name,
          email: email,
          phone: phone,
          password: password,
          type:'user'
        })
        .then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            alert("successfully registered");
            Navigate('/login')
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.error == "email-already-exist") {
            alert("email already exist");
          } else if (err.response.data.error == "phone number already exist") {
            alert("Phone number already exist");
          }
        });
    }  catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach(err => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: '' });                    
                  }}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputLabelProps={{
                    style: { color: "black" } 
                  }}
                  FormHelperTextProps={{ 
                    style: { textAlign: "right" }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrors({ ...errors, lastName: '' });                    
                  }}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputLabelProps={{
                    style: { color: "black" } 
                  }}
                  FormHelperTextProps={{ 
                    style: { textAlign: "right" }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: '' });                    
                  }}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputLabelProps={{
                    style: { color: "black" } 
                  }}
                  FormHelperTextProps={{ 
                    style: { textAlign: "right" }
                  }}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   required
                   fullWidth
                   id="phone"
                   name="phone"
                   autoComplete="phone"
                   label="Phone number"
                   type="number"
                   onChange={(e) => {
                     setPhone(e.target.value);
                     setErrors({ ...errors, phone: '' });
                   }}
                   error={!!errors.phone}
                   helperText={errors.phone}
                   InputLabelProps={{
                     style: { color: "black" } 
                   }}
                   FormHelperTextProps={{ 
                     style: { textAlign: "right" }
                   }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: '' });
                  }}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputLabelProps={{
                    style: { color: "black" } 
                  }}
                  FormHelperTextProps={{ 
                    style: { textAlign: "right" }
                  }}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="By clicking this i am agree the hitecmart terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Log In</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
