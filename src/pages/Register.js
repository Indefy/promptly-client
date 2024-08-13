import React, { useState } from "react";
import { TextField, Button, Container, Typography, Alert } from "@mui/material";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/register`,
        formData
      );
      console.log("Registration Successful:", response.data);
      setErrors({}); // Clear errors if registration is successful
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const backendErrors = {};
        error.response.data.errors.forEach((err) => {
          backendErrors[err.path] = err.msg;
        });
        setErrors(backendErrors);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={name}
          onChange={onChange}
          required
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={email}
          onChange={onChange}
          required
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.password}
          helperText={errors.password}
        />
        {Object.keys(errors).length > 0 && (
          <Alert severity="error">Please correct the highlighted errors.</Alert>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;
