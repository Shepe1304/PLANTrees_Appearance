import React from "react";
import "./Header.css";
import logo from "../../images/coolLogo-removebg-preview.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header--dummy"></div>
      <nav className="header--navbar">
        <div className="header--logo">
          <img src={logo} alt="" />
        </div>
        <div className="header--options">
          <div className="header--option">HOME</div>
          <div className="header--option">TREE LIBRARY</div>
          <div className="header--option">MY TREE LIBRARY</div>
          <div className="header--option">MY TREE SPACE</div>
          <div className="header--option">AREA SUGGESTIONS</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
