import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "blueviolet",
        padding: "10px",
      }}
    >
      <div className="left">WDM</div>
      <div
        className="right"
      >
        <Link className="items" to={"/"}>Home</Link>
        <Link className="items" to={"/about"}>About</Link>
        <Link className="items" to={"/team"}>Team</Link>
        <Link className="items" to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
