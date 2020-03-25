import React from "react";
import { NavLink } from "react-router-dom";

function ListSubheader() {
  return (
    <div className="subheader">
      <div className="subheader__container">
        <NavLink to={`/search/profiles`} activeClassName="subheader__linkto">
          <h1 className="subheader__link">Profiles</h1>
        </NavLink>
      </div>
      <div className="subheader__container">
        <NavLink to={`/search/projects`} activeClassName="subheader__linkto">
          <h1 className="subheader__link">Projects</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default ListSubheader;
