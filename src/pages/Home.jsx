import React from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";
import hero from "../assets/hero.png";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        padding: 3,
        textAlign: "center",
        
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#0284C7",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontFamily: "'Montserrat', sans-serif"
            
          }}
        >
          HELLO, MY NAME IS SANTHAVI
        </Typography>

        <Avatar
          src={hero}
          alt="Santhavi"
          sx={{
            width: 100,
            height: 100,
            border: "4px solid #38BDF8",
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.7)",
            
          }}
        />
      </Box>

     
      <Typography
        variant="h6"
        sx={{
          color: "#38BDF8",
          fontWeight: "medium",
          marginTop: 2,
          letterSpacing: "1px",
          fontFamily: "'Poppins', sans-serif"

          
        }}
      >
        B.Tech IT Student & Aspiring Full Stack Developer
      </Typography>

      
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          component="a"
          href="https://github.com/santhavi"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#38BDF8",
            color: "white",
            padding: "10px 24px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "14px",
            textTransform: "none",
            transition: "all 0.2s ease-in-out",
            
            "&:hover": {
              backgroundColor: "#0EA5E9",
              transform: "scale(1.05)",
              fontFamily: "'Times New Roman', serif"
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default Home;