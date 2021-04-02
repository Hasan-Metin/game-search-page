import React from "react";
import "./Footer.style.scss";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Youtube from "./assets/youtube.svg";
import Twitter from "./assets/twitter.svg";

function Footer() {
  return (
    <footer id="footer-wrapper">
      <div className="footer">
        <div className="footer__left-side">
          <a>Games</a>
          <a>Contact Us</a>
          <a>FAQs</a>
          <a>Memebership</a>
          <a>Blog</a>
          <a>Service Status</a>
          <a>Download</a>
        </div>
        <div className="footer__right-side">
          <div className="footer__right-side--social">
            <label>Follow Us</label>
            <div>
              <img src={Facebook} alt="Facebook icon" />
              <img src={Instagram} alt="Instagram icon" />
              <img src={Youtube} alt="Youtube icon" />
              <img src={Twitter} alt="Twitter icon" />
            </div>
          </div>
          <div className="footer__right-side--language">
            <label>Site Language</label>
            <select value={"english"} o>
              <option value="english">English</option>
              <option value="turish">Turkish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="bottom-footer__content-area">
          <div className="bottom-footer__content-area--left">
            <a>Term of Use</a>
            <a>Privacy Policy</a>
            <a>Cookies</a>
          </div>
          <div className="bottom-footer__content-area--right">
            <label>All rights reserved.</label>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
