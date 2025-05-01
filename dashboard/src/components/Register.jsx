import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const defaultTheme = createTheme();

export default function Register() {
  const [alert, setAlert] = React.useState({ st: false, msg: "", severity: "error" });
  const navigate = useNavigate();
  const { login, user } = useAuth();

  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      username: formData.get("Username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!data.username || !data.email || !data.password) {
      setAlert({ st: true, msg: "All fields are required.", severity: "error" });
      return;
    }

    if (!validateEmail(data.email)) {
      setAlert({ st: true, msg: "Enter a valid email address.", severity: "error" });
      return;
    }

    if (!validatePassword(data.password)) {
      setAlert({ st: true, msg: "Password must be at least 6 characters long.", severity: "error" });
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/user/register`, data, {
        headers: { "Content-Type": "application/json" },
      });

      setAlert({ st: true, msg: "Registration successful! Redirecting...", severity: "success" });
      setTimeout(() => {
        login(response.data.token);
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      if (error.response) {
        setAlert({ st: true, msg: error.response.data.error || "Registration failed.", severity: "error" });
      } else if (error.request) {
        setAlert({ st: true, msg: "Network error. Please try again later.", severity: "error" });
      } else {
        setAlert({ st: true, msg: "Something went wrong. Please try again.", severity: "error" });
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
            Register Now
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {alert.st && <Alert severity={alert.severity}>{alert.msg}</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
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
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
