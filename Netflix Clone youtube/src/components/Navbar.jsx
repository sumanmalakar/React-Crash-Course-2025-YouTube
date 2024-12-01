import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
          />
        </div>
        <div className="menu">
          <a href="">Home</a>
          <a href="">TV Shows</a>
          <a href="">Movies</a>
          <a href="">New & Popular</a>
          <a href="">My List</a>
        </div>
        <div className="profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png
            "
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
