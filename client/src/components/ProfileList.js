import React from "react";
import { Link } from "react-router-dom";
import ListSubheader from "../components/ListSubheader";

const ProfileList = props => {
  return (
    <>
      <ListSubheader />
      <h1>Profiles</h1>
      {props.profiles.map(profile => {
        return (
          <div className="profiles">
            <Link to={`/profile/${profile.id}`}>
              <div className="profiles__pic"></div>
              <p className="profiles__name">{`${profile.firstname} ${profile.lastname}`}</p>
              <p className="profiles__location">{`${profile.city}, ${profile.country}`}</p>
              <p className="profiles__medium">{profile.medium}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProfileList;
