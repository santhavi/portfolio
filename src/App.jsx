import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { styled, Box } from "@mui/material";


const AppWrapper = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  color: "white",
});
function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />

          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;