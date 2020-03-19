import React from "react";
import { Link } from "react-router-dom";

function ListSubheader() {
  return (
    <div className="subheader">
      <div className="subheader__container">
        <Link to={`/search/profiles`}>
          <h1 className="subheader__link">Profiles</h1>
        </Link>
      </div>
      <div className="subheader__container">
        <Link to={`/search/projects`}>
          <h1 className="subheader__link">Projects</h1>
        </Link>
      </div>
    </div>
  );
}

export default ListSubheader;
