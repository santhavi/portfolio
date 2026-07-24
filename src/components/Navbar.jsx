import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
                Santhavi Saravanan
            </Typography>
            <Button color="inherit" component={Link} to="/Home">Home</Button>
            <Button color="inherit" component={Link} to="/About">About</Button>
            <Button color="inherit" component={Link} to="/Contact">Contact</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;