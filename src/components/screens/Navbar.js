import React from "react";

import logo from "../assets/icons/backpackLogo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/img/default.jpg";
import { useCookies } from "react-cookie";
import { DecodeJWT } from "./../../helper/decodeCookie";

const Navbar = function (props) {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _, removeCookie] = useCookies(["jwt"]);

  const jwtId = cookies.jwt;
  const jwtToken = DecodeJWT(jwtId);

  const filterName = jwtToken?.name.split(" ")[0];
  const userImage = sessionStorage?.getItem("image")?.includes("http")
    ? sessionStorage.getItem("image")
    : userImg;

  const onClickHandler = (e) => {
    removeCookie("jwt", { path: `/` });
    window.location.reload();
  };

  return (
    <div className="header">
      <nav className="nav nav--tours">
        <Link to={"/tours"} className="nav__el">
          All Tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            {/* <svg> // need this to set with png or svg
              <use xlinkHref="../assets/svg/icons.svg"></use>
            </svg> */}
          </button>
          <input
            type={"text"}
            placeholder="Search Tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <Link to={"/tours"}>
        <div className="header__logo">
          <img src={logo} alt="backpack-logo" />
        </div>
      </Link>
      <nav className="nav nav--user">
        <button className="nav__el">My bookings</button>
        {jwtToken && (
          <>
            <NavLink to={"/auth/dashboard"} className="nav__el">
              <img src={userImage} alt={"user"} className="nav__user-img" />
              <span>{filterName}</span>
            </NavLink>
            <button onClick={onClickHandler} className="nav__el">
              Logout
            </button>
          </>
        )}
        {!jwtToken && (
          <Link to={`/auth/signin`} className="nav__el nav__el--cta">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
