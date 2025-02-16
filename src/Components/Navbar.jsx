import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("Profile");

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Aardvark Connect</h1>
      <p className="navbar-description">
        The Social Network for all Aardvark Students to interact:
      </p>
      <nav className="navbar-menu">
        {["Home", "Profile", "Club Hub", "Settings"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`navbar-item ${active === item ? "navbar-active" : ""}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
