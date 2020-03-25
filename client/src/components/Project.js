import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
  console.log(props.project);
  return (
    <div className="project">
      <h1 className="project__title">{props.project.title}</h1>
      <div className="project__settings">
        {props.project.private === true ? (
          <div className="project__setting-container">
            <div className="project__setting">Private</div>
          </div>
        ) : (
          <div className="project__setting-container">
            <div className="project__setting">Public</div>
          </div>
        )}
        {props.project.id === "0" || props.project.id === "1" ? null : (
          <div className="project__join-container">
            <button className="project__join">Request to Join</button>
          </div>
        )}
        {props.project.onlineoption === true ? (
          <div className="project__setting-container">
            <div className="project__setting">Online Options</div>
          </div>
        ) : (
          <div className="project__setting-container">
            <div className="project__setting">In Person</div>
          </div>
        )}
      </div>
      <div className="project__top-info">
        <div className="project__contributors">
          <div className="project__cont-container">
            <h4 className="project__creator">Creator:</h4>
            <Link
              className="profiles__link"
              to={`/profile/${props.project.creatorid}`}
            >
              <p className="project__creator-name">
                {props.project.firstname} {props.project.lastname}
              </p>
            </Link>
          </div>
          <div className="project__cont-container">
            <h4 className="project__collaborators">Collaborators:</h4>
            <div className="project__collab-container">
              {props.project.collaborators.map(collaborator => {
                return (
                  <Link
                    className="profiles__link"
                    to={`/profile/${collaborator.id}`}
                  >
                    <p className="project__collaborator-name">
                      {collaborator.firstname} {collaborator.lastname}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <p className="project__description">{props.project.description}</p>
      </div>
    </div>
  );
};

export default Project;
