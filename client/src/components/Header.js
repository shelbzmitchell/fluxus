import React from "react";
import { Link } from "react-router-dom";

//icons
import searchIcon from "../assets/icons/search-icon.svg";
import logo from "../assets/icons/logo-icon.png";

const Header = props => {
  return (
    <section className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} />
      </div>
      {props.loggedIn ? (
        <div className="header__links">
          <div className="header__profile">
            <Link to={`/profile`}>
              <div className="header__profile-icon"></div>
            </Link>
          </div>
          <div className="header__search">
            <Link to={`/search/profiles`}>
              <img className="header__search-icon" src={searchIcon} />
            </Link>
          </div>
          <div className="header__logout">
            <Link to={`/`} onClick={() => props.logoutClick()}>
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <p>Sign up</p>
        </div>
      )}
    </section>
  );
};

export default Header;
