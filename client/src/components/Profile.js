import React from "react";
import { Link } from "react-router-dom";
import mail from "../assets/icons/mail-icon.svg";

const Profile = props => {
  let profileId = props.match.params.id;

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
              {/* if not main user, show icon to send message */}
              {props.profile.id !== "0" ? (
                <img src={mail} alt="Send Message" />
              ) : null}
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
            {/* if main user, show new project button */}
            {props.profile.id === "0" ? (
              <Link to={`/newproject`}>
                <button className="profile__new-project">New Project</button>
              </Link>
            ) : null}
          </div>
          <div className="profile__projects">
            {/* map through projects to show on profile, if main user, edit project component will be rendered as well. Otherwise, just the project component */}
            {props.projects.map((project, index) => {
              if (project.creatorid === "0" && props.match.path === "/main") {
                return (
                  <Link key={index} to={`/project/${project.id}/edit`}>
                    <p className="profile__project">{project.title}</p>
                  </Link>
                );
              } else if (
                project.creatorid === String(profileId) &&
                project.creatorid !== "0"
              ) {
                return (
                  <Link to={`/project/${project.id}`}>
                    <p className="profile__project">{project.title}</p>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="profile__personalart-section">
          <h2 className="profile__personalart-header">Personal Art</h2>
          {props.profile.personalart.map((personal, index) => {
            return (
              <div key={index} className="profile__personalart">
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
