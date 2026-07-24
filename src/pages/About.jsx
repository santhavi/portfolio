import React from 'react'
import { Box, Typography, Paper } from "@mui/material";

function About() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          backgroundColor: "#1E293B"

        }}
      >
        <Paper
          elevation={4}
          sx={{
            maxWidth: 800,
            padding: 4,
            borderRadius: 4,
            color: "#38BDF8",
            background: "linear-gradient(135deg, #0F172A, #1E293B)",
            "&:hover": {
              backgroundColor: "#1E293B",
              transform: "translateY(-5px)",
              boxShadow: "0 10px 30px rgba(56, 189, 248, 0.3)",
            }

          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold", fontFamily: "'Montserrat', sans-serif",

            }}


          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              lineHeight: 2,
              textAlign: "justify",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Hello! I'm <strong>Santhavi Saravanan</strong>, a B.Tech Information
            Technology student with a strong interest in Full Stack Web
            Development. I enjoy building modern, responsive, and user-friendly
            web applications while continuously learning new technologies.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              lineHeight: 2,
              textAlign: "justify",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            I have experience with HTML, CSS, JavaScript, React.
            I am passionate about creating projects that
            solve real-world problems and enhance user experiences.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              lineHeight: 2,
              textAlign: "justify",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            My goal is to become a successful Full Stack Developer and contribute
            to innovative software solutions. I am a quick learner, a good team
            player, and always eager to take on new challenges.
          </Typography>
        </Paper>
      </Box>
    </>

  )
}

export default About