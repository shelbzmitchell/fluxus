import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  console.log(props.profile);
  return (
    <section className="profile">
      <div className="profile__left">
        <div className="profile__photo-container">
          <img
            className="profile__photo"
            src={props.profile.profilephoto}
            alt="Profile"
          />
        </div>
        {props.profile.artphoto ? (<div className="profile__artphoto-container">
          <img
            className="profile__artphoto"
            src={props.profile.artphoto}
            alt="Art"
          />
        </div>) : (null)}
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
        <h2 className="profile__projects-header">Projects</h2>
        <button className="profile__new-project">New Project</button>
        <div className="profile__projects">
          {props.profile.projects.map(project => {
            return (
              <>
                {project.firstname === "Adrienne" &&
                project.lastname === "Mountain" ? (
                  <Link to={`/project/${project.id}`}>
                    <p className="profile__project">{project.projectname}</p>
                  </Link>
                ) : (
                  <Link to={`/project/${project.id}/edit`}>
                    <p className="profile__project">{project.projectname}</p>
                  </Link>
                )}
              </>
            );
          })}
        </div>
        <div className="profile__personalart">
          {props.profile.personalart.map(personal => {
            console.log(personal);
            return (
              <>
                <h4 className="profile__personal-title">{personal.title}</h4>
                <p className="profile__personal-description">
                  {personal.description}
                </p>
                <img
                  className="profile__personal-image"
                  src={personal.image}
                  alt="Personal Art"
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Profile;
