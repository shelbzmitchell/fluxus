import React from "react";

const Project = props => {
  console.log(props.project.id);
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
        {/* {props.project.id === "0" || props.project.id === "1" ? (
          <button className="project__join">Request to Join</button>
        ) : null} */}
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
      <div className="project__contributors">
        <h4 className="project__creator">Creator:</h4>
        <p className="project__creator-name">
          {props.project.firstname} {props.project.lastname}
        </p>
        <h4 className="project__collaborators">Collaborators:</h4>
        {props.project.collaborators.map(collaborator => {
          return (
            <p className="project__collaborator-name">
              {collaborator.firstname} {collaborator.lastname}
            </p>
          );
        })}
      </div>
      <p className="project__description">{props.project.description}</p>
    </div>
  );
};

export default Project;
