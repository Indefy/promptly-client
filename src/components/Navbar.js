// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Reminder App
        </Typography>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
        >
          <Button color="inherit">Home</Button>
        </Link>
        <Link
          to="/register"
          style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
        >
          <Button color="inherit">Register</Button>
        </Link>
        <Link
          to="/login"
          style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
        >
          <Button color="inherit">Login</Button>
        </Link>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
        >
          <Button color="inherit">Dashboard</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;