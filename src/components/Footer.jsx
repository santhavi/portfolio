import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingBottom: "10px",
        paddingTop: "10px",
        backgroundColor: "#1E293B",
        color: "white"
      }}
    >
      <Typography>
        &copy; 2026 Santhavi Saravanan
      </Typography>

      <Typography variant="body2">
        Aspiring Full Stack Developer
      </Typography>
    </Box>
  );
}

export default Footer;