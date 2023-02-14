import React from "react";
import '../index.css'
import logo from "../images/react-logo.svg"

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img
        className="nav--logo_icon"
        alt="react-logo"
        src={logo}
      />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
