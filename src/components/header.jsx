import React from "react";
import "../components/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title-container">
        <img className="header-img" src="public/white-lipped-treefrog-bg.jpg" />
        <div className="main-title">
          <h1 className="page-title">Vision Wildlife</h1>
          <h2 className="tagline">
            Exploring the Natural World Through Photography
          </h2>
        </div>
      </div>
    </div>
  );
}
