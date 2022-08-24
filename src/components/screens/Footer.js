import React from "react";

import logo from "../assets/icons/backpackLogo.png";

import "./Footer.css";

const Footer = function (props) {
  return (
    <div class="footer">
      <div class="footer__logo">
        <img src={logo} alt="" />
      </div>
      <ul class="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p class="footer__copyright">&copy; by Rudy. Made with love .</p>
    </div>
  );
};

export default Footer;
