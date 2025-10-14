import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/logo.png"; // replace with your circular Mine in the Mind logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} alt="BuildMinM Logo" className="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learning">Learn</Link></li>
          <li><Link to="/agents">AI Agents</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/rewards">Rewards</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
        </ul>
        <a
          href="https://maadakubayi.gumroad.com/l/flmref"
          target="_blank"
          rel="noreferrer"
          className="buy-btn"
        >
          Buy Book
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
