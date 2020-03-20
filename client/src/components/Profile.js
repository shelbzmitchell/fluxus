import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  if (props.profile === undefined) {
    return <p>Loading Profile</p>;
  }
  if (props.profile) {
    return (
      <section className="profile">
        <div className="profile__left">
          <h1>
            {props.profile.firstname} {props.profile.lastname}
          </h1>
          <div className="profile__site">{props.profile.website}</div>
          <div className="profile__collab">
            <p className="profile__collab-text">Open to Collaborate?</p>
            <p className="profile__collab-answer">
              {props.profile.lookingtocollaborate}
            </p>
          </div>
          <div className="profile__location">
            <p className="profile__city">{props.profile.city}</p>
            <p className="profile__province">{props.profile.province}</p>
            <p className="profile__country">{props.profile.country}</p>
          </div>
          <div className="profile__medium">{props.profile.medium}</div>
          <div className="profile__bio">{props.profile.bio}</div>
          <div className="profile__photo"></div>
          <div className="profile__art-photo"></div>
        </div>
        <div className="profile__right">
          <div className="profile__projects">
            {props.profile.projects.map(project => {
              return (
                <>
                  <Link to={`/project/${project.id}`}>
                    <p className="profile__project">{project.projectname}</p>
                  </Link>
                </>
              );
            })}
          </div>
          <div className="profile__personalart">
            {props.profile.personalart.map(personal => {
              return (
                <>
                  <h4>{personal.title}</h4>
                  <p>{personal.description}</p>
                  <p>{personal.image}</p>
                </>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};
export default Profile;
