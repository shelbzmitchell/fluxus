import React from "react";
import { Link } from "react-router-dom";

//icons
import searchIcon from "../assets/icons/search-icon.svg";
import logo from "../assets/icons/logo-icon.png";

const Header = props => {
  return (
    <>
      {props.loggedIn ? (
        <section className="header">
          <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="Logo" />
          </div>
          <div className="header__search">
            <Link to={`/search/profiles`}>
              <img
                className="header__search-icon"
                src={searchIcon}
                alt="Search"
              />
            </Link>
          </div>
          <div className="header__links">
            <div className="header__profile">
              <Link to={`/main`}>
                <div className="header__profile-icon-container">
                  <img
                    className="header__profile-icon"
                    src={props.profile.profilephoto}
                    alt="Profile"
                  />
                </div>
              </Link>
            </div>
            <div className="header__logout">
              <Link to={`/`} onClick={() => props.logoutClick()}>
                <h3 className="header__logout-text">Logout</h3>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="loheader">
          <div className="loheader__logo-container">
            <img className="loheader__logo" src={logo} alt="Logo" />
          </div>
          <div className="loheader__signup-container">
            <h3 className="loheader__signup">Sign up</h3>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
