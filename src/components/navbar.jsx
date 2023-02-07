import React from "react";

export default function NavBar() {
  return (
    <nav className="top-navbar">
      <div className="header-logo-container">
        <a href="./">
          <img className="header-logo" src="logo-visionwildlife-frog-only.svg"/>
        </a>
      </div>
      <div className="top-navlinks-container">
        <ul>
            <a href="">
                <li className="navbarlink">Explore</li>
            </a><a href="">
                <li className="navbarlink">Learn</li>
            </a><a href="">
                <li className="navbarlink">About</li>
            </a><a href="">
                <li className="navbarlink">Contact</li>
            </a>
        </ul>
      </div>
    </nav>
  );
}