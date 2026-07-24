import React from "react";
import { Typography, Box, Paper, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,

            }}
        >
            <Paper
                elevation={8}
                sx={{
                    padding: 5,
                    width: 500,
                    borderRadius: "20px",
                    backgroundColor: "#1E293B",
                    color: "white",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                    "&:hover": {
                        backgroundColor: "#1E293B",
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(56, 189, 248, 0.3)",
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        marginBottom: 4,
                        color: "#38BDF8",
                        fontWeight: "bold",
                    }}
                >
                    Contact Me
                </Typography>


                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                    <EmailIcon sx={{ marginRight: 2, color: "#38BDF8" }} />

                    <Link
                        href="mailto:santhavisaran06@gmail.com"
                        underline="hover"
                        sx={{ color: "white" }}
                    >
                        santhavisaran06@gmail.com
                    </Link>
                </Box>


                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                    <GitHubIcon sx={{ marginRight: 2, color: "#38BDF8" }} />

                    <Link
                        href="https://github.com/santhavi/portfolio/tree/main"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ color: "white" }}
                    >
                        github.com/santhavi/portfolio
                    </Link>
                </Box>


                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                    <LinkedInIcon sx={{ marginRight: 2, color: "#38BDF8" }} />

                    <Link
                        href="www.linkedin.com/in/santhavi-saravanan-037b79336"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ color: "white" }}
                    >
                        linkedin.com/in/santhavi-saravanan-037b79336
                    </Link>
                </Box>


                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon sx={{ marginRight: 2, color: "#38BDF8" }} />

                    <Typography>Tamil Nadu, India</Typography>
                </Box>
            </Paper>
        </Box>
    );
}

export default Contact;