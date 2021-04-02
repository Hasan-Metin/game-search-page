import React, { useState } from "react";
import "./Header.style.scss";
import Logo from "./assets/logo.png";
import Arrow from "./assets/indicator.svg";

function Header() {
  const [path, setPath] = useState("Games");
  return (
    <header id="header-wrapper">
      <div className="header">
        <img className="header__logo" src={Logo} alt="game logo" />
        <nav className="header__linkBox">
          <div className="header__linkBox--item">
            <a
              onClick={() => {
                setPath("Games");
              }}
              // To see indicator when changing its place with routing, I didn't used href tag here purposely
            >
              Games
            </a>
            {path === "Games" && <img src={Arrow} alt="path indicator" />}
          </div>
          <div className="header__linkBox--item">
            <a
              onClick={() => {
                setPath("Membership");
              }}
            >
              Membership
            </a>
            {path === "Membership" && <img src={Arrow} alt="path indicator" />}
          </div>
          <div className="header__linkBox--item">
            <a
              onClick={() => {
                setPath("Download");
              }}
            >
              Download
            </a>
            {path === "Download" && <img src={Arrow} alt="path indicator" />}
          </div>
          <div className="header__linkBox--item">
            <a
              onClick={() => {
                setPath("Blog");
              }}
            >
              Blog
            </a>
            {path === "Blog" && <img src={Arrow} alt="path indicator" />}
          </div>
          <div className="header__linkBox--item">
            <a
              onClick={() => {
                setPath("Support");
              }}
            >
              Support
            </a>
            {path === "Support" && <img src={Arrow} alt="path indicator" />}
          </div>
        </nav>
        <div onClick={() => {}} className="header__button">
          <p className="header__button--text">LETS PLAY</p>
        </div>
      </div>
    </header>
  );
}

export { Header };
