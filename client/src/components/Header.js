import React from "react";

//icons
import searchIcon from "../assets/icons/search-icon.svg";
import logo from "../assets/icons/logo-icon.png";

function Header() {
  return (
    <section className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} />
      </div>
      <div className="header__links">
        <div className="header__profile">
          <div className="header__profile-icon"></div>
        </div>
        <div className="header__search">
          <img className="header__search-icon" src={searchIcon} />
        </div>
      </div>
    </section>
  );
}

export default Header;
