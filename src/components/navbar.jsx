import React from "react";
import "../components/navbar.css";
import Hamburger from "../assets/menu-hamburger.png";

export default function NavBar() {

  const [showNavbar, setShowNavbar] = React.useState(false);

  function toggleMenu() {
    setShowNavbar((prevState) => !prevState);
  }

  return (
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
        <img className="hamburger" src={Hamburger} onClick={toggleMenu} />
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
  );
}
