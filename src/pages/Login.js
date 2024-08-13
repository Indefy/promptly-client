import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axiosInstance from "../utils/axiosInstance";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", formData);
      console.log("Login Successful:", response.data);
      // Handle successful login (e.g., save token, redirect)
    } catch (error) {
      console.error("Login Error:", error.response.data);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;
