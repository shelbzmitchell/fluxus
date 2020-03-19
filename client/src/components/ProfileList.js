import React from "react";
import ListSubheader from "../components/ListSubheader";

const ProfileList = props => {
  return (
    <>
      <ListSubheader />
      <h1>Profiles</h1>
      {props.profiles.map(profile => {
        return (
          <div className="profiles">
            <div className="profiles__pic"></div>
            <p className="profiles__name">{`${profile.firstname} ${profile.lastname}`}</p>
            <p className="profiles__location">{`${profile.city}, ${profile.country}`}</p>
            <p className="profiles__medium">{profile.medium}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProfileList;
