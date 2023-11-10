import React from "react";
import "../App.css";

export default function () {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img className="react" src="logo192.png" />
          </div>
          <div className="nav-links">
            <ul className="nav-box">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <button className="sleep-mode">
                <img src="crescent-moon.png" />{" "}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
