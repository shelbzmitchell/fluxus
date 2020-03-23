import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  return (
    <section className="profile">
      <div className="profile__top">
        <div className="profile__top-right">
          <div className="profile__photo-container">
            <img
              className="profile__photo"
              src={props.profile.profilephoto}
              alt="Profile"
            />
          </div>
          <div className="profile__artphoto-container">
            {props.profile.artphoto ? (
              <img
                className="profile__artphoto"
                src={props.profile.artphoto}
                alt="Art"
              />
            ) : null}
          </div>
        </div>
        <div className="profile__top-left">
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">
                {props.profile.firstname} {props.profile.lastname}
              </h1>
            </div>
            <div className="profile__bio">{props.profile.bio}</div>
            <h4 className="profile__info-label">website</h4>
            <div className="profile__site">{props.profile.website}</div>
            <h4 className="profile__info-label">location</h4>
            <div className="profile__location">
              <p className="profile__city">{`${props.profile.city}, ${props.profile.province}, ${props.profile.country}`}</p>
            </div>
            <h4 className="profile__info-label">medium</h4>
            <div className="profile__medium">{props.profile.medium}</div>
          </div>
        </div>
      </div>
      <div className="profile__bottom">
        <div className="profile__projects-section">
          <div className="profile__projects-top">
            <h2 className="profile__projects-header">Projects</h2>
            <button className="profile__new-project">New Project</button>
          </div>
          <div className="profile__projects">
            {props.profile.projects.map(project => {
              if (project.id === "0" || project.id === "1") {
                return (
                  <Link to={`/project/${project.id}/edit`}>
                    <p className="profile__project">{project.projectname}</p>
                  </Link>
                );
              } else {
                return (
                  <Link to={`/project/${project.id}`}>
                    <p className="profile__project">{project.projectname}</p>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="profile__personalart-section">
          <h2 className="profile__personalart-header">Personal Art</h2>
          {props.profile.personalart.map(personal => {
            return (
              <div className="profile__personalart">
                <h4 className="profile__personal-title">{personal.title}</h4>
                <p className="profile__personal-description">
                  {personal.description}
                </p>
                <img
                  className="profile__personal-image"
                  src={personal.image}
                  alt="Personal Art"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Profile;
