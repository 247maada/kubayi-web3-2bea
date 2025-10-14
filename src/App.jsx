import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learning from "./pages/Learning";
import Agents from "./pages/Agents";
import Community from "./pages/Community";
import Rewards from "./pages/Rewards";
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/community" element={<Community />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Footer />
    </Router>
  );
  }
