import React from "react";
import { FaHome, FaUserFriends, FaUsers } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Aardvark Connect</div>
      <div className="nav-links">
        <a href="#" className="nav-item">
          <FaHome className="icon" />
        </a>
        <a href="#" className="nav-item">
          <FaUserFriends className="icon" />
        </a>
        <a href="#" className="nav-item">
          <FaUsers className="icon" />
        </a>
      </div>
      <input type="text" className="search-bar" placeholder="Search..." />
    </nav>
  );
}
