import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Welcome to the Guardian Agency</h1>
        <h2>Learn how we can help guard what's most valuable to you</h2>
        <a href="#" className="btn-learn-more">
          {" "}
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Header;
