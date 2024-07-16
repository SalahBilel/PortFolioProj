import React, { useState } from "react";
import "../1.header/header.css";
const Header = () => {
  const [showMenu, setShowmenu] = useState(false);

  return (
    <header>
      <div className="flex">
        <img src="/logo.png" className="logo" />
        <button className="showMenu" onClick={() => setShowmenu(true)}>
          Show model
        </button>
      </div>

      <nav id="navHomePage">
        <ul className="flex">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <button>Light</button>

      {showMenu && (
        <div className=" fixed">
          <ul className="modal ">
            <li className="">
              <button
                className="closeButton  "
                onClick={() => setShowmenu(false)}
              >
                Close
              </button>
            </li>
            <li className="">
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
