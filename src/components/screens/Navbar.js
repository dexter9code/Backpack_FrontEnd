import React from "react";

import logo from "../assets/icons/backpackLogo.png";
import "./Navbar.css";

const Navbar = function (props) {
  return (
    <div className="header">
      <nav className="nav nav--tours">
        <a href="#" className="nav__el">
          All Tours
        </a>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use xlinkHref="../assets/svg/icons.svg"></use>
            </svg>
          </button>
          <input
            type={"text"}
            placeholder="Search Tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src={logo} alt="backpack-logo" />
      </div>
      <nav className="nav nav--user">
        <button className="nav__el">My bookings</button>
        <button className="nav__el">
          <img
            src="../assets/img/default.jpg"
            alt=""
            className="nav__user-img"
          />
          <span>User</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
