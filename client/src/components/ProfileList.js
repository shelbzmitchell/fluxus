import React from "react";
import { Link } from "react-router-dom";
import ListSubheader from "../components/ListSubheader";

const ProfileList = props => {
  return (
    <div className="profiles">
      <ListSubheader />
      {/* map through profiles to show on search page, slice first item in array because it's main user profile */}
      {props.profiles.slice(1).map((profile, index) => {
        return (
          <div key={index}>
            <Link className="profiles__link" to={`/profile/${profile.id}`}>
              <div className="profiles__container">
                <div className="profiles__item-container profiles__item-container--1">
                  <div className="profiles__pic-container">
                    <img
                      className="profiles__pic"
                      src={profile.profilephoto}
                      alt="Profile"
                    />
                  </div>
                </div>

                <div className="profiles__item-container profiles__item-container--2">
                  <p className="profiles__item">{`${profile.firstname} ${profile.lastname}`}</p>
                </div>
                <div className="profiles__item-container profiles__item-container--3">
                  <p className="profiles__item">{`${profile.city}, ${profile.country}`}</p>
                </div>
                <div className="profiles__item-container profiles__item-container--4">
                  <p className="profiles__item">{profile.medium}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileList;
