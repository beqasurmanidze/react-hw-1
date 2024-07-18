import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="backgroundColor">
      <div className="flex">
        <img className="img" src="/earth.jpg" alt="" />
        <p>my travel journal</p>
      </div>
    </header>
  );
};

export default Header;
