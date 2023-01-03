import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div class = "NavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/finance">Tasks</Link>
        </li>
        <li>
          <Link to="/2">Summary</Link>
        </li>
        <li>
          <Link to="/blog">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;