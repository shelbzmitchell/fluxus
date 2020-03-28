import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
  return (
    <div className="project">
      <h1 className="project__title">{props.project.title}</h1>
      <div className="project__settings">
        {/* show if project is public or private */}
        {props.project.private === true ? (
          <div className="project__setting-container">
            <div className="project__setting">Private</div>
          </div>
        ) : (
          <div className="project__setting-container">
            <div className="project__setting">Public</div>
          </div>
        )}
        {/* if project isn't by main user, show request to join button */}
        {props.project.id === "0" || props.project.id === "1" ? null : (
          <div className="project__join-container">
            <button className="project__join">Request to Join</button>
          </div>
        )}
        {/* show if project is has an online option or not */}
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
            {/* link to creators profile */}
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
              {/* map through and show collaborators of selected project */}
              {JSON.parse(JSON.stringify(props.project.collaborators)).map(
                (collaborator, index) => {
                  return (
                    <Link
                      key={index}
                      className="profiles__link"
                      to={`/profile/${collaborator.id}`}
                    >
                      <p className="project__collaborator-name">
                        {collaborator.firstname} {collaborator.lastname}
                      </p>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <p className="project__description">{props.project.description}</p>
      </div>
    </div>
  );
};

export default Project;
