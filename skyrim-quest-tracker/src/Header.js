import React from "react";
import img from "./skyrim-icon.png";

const Header = () => {
  return (
    <h1 className="banner">
      <span
        style={{
          display: "inline-block",
        }}
      >
        <img className="skyrim-logo" src={img} alt="skyrim logo"></img>
      </span>
      Skyrim Quest Tracker
      <span
        style={{
          display: "inline-block",
        }}
      >
        <img className="skyrim-logo" src={img} alt="skyrim logo"></img>
      </span>
    </h1>
  );
};

export default Header;
