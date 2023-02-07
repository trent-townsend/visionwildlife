import React from "react";
import "../components/navbar.css";
import Hamburger from "../assets/menu-hamburger.png";
import Cross from "../assets/cross.svg";

export default function NavBar() {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const icon = showNavbar ? Cross : Hamburger

  function toggleMenu() {
    setShowNavbar((prevState) => !prevState);
  }

  return (
    <div className="parent">
    <nav className="top-navbar">
      <div className="header-logo-container">
        <a href="./">
          <img
            className="header-logo"
            src="logo-visionwildlife-frog-only.svg"
          />
        </a>
      </div>
      <div className="hamburger-container">
        <img className="hamburger" src={icon} onClick={toggleMenu} />
      </div>

      {showNavbar && (
        <div className="top-navlinks-container">
          <ul>
            <a href="#">
              <li className="navbarlink">Explore</li>
            </a>
            <a href="#">
              <li className="navbarlink">Learn</li>
            </a>
            <a href="#">
              <li className="navbarlink">About</li>
            </a>
            <a href="#">
              <li className="navbarlink">Contact</li>
            </a>
          </ul>
        </div>
      )}
    </nav>
    </div>
  );
}
