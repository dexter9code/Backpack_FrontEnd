import React from "react";

import logo from "../assets/icons/backpack-logo-trans.png";

import "./Footer.css";

const Footer = function (props) {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footer__nav">
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
      <p className="footer__copyright">&copy; by Rudy. Made with ❤️ .</p>
    </div>
  );
};

export default Footer;
