import React from "react";
import "./Navbar.css";
import image from "./image1.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <img className="image" src={image} alt="ipl" />
      <div className="About">
        <Link to="/Popular" className="no-underline">
          Popularplayers
        </Link>
        <Link to="/Contact" className="no-underline">
          Contact Us
        </Link>
        <Link to="/About" className="no-underline">
          About Us
        </Link>
        <Link to="/Scores" className="no-underline">
          Scores
        </Link>
        <Link to="/Dashboard" className="no-underline">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
