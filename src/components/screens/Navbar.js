import React from "react";

import logo from "../assets/icons/backpackLogo.png";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userImg from "../assets/img/default.jpg";
import { removeUser } from "../../features/userSlice";
import { useCookies } from "react-cookie";

const Navbar = function (props) {
  const user = useSelector((state) => state.Users.user);
  const filterName = user?.name.split(" ")[0];
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const onClickHandler = (e) => {
    removeCookie("jwt", { path: `/` });
    dispatch(removeUser());
    window.location.reload();
  };

  return (
    <div className="header">
      <nav className="nav nav--tours">
        <Link to={"/"} className="nav__el">
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
      <Link to={"/"}>
        <div className="header__logo">
          <img src={logo} alt="backpack-logo" />
        </div>
      </Link>
      <nav className="nav nav--user">
        <button className="nav__el">My bookings</button>
        {user && (
          <>
            <button className="nav__el">
              <img src={userImg} alt="user-img" className="nav__user-img" />
              <span>{filterName}</span>
            </button>
            <button onClick={onClickHandler} className="nav__el">
              Logout
            </button>
          </>
        )}
        {!user && (
          <Link to={`/auth/signin`} className="nav__el nav__el--cta">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
