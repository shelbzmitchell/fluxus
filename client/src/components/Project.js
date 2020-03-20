import React from "react";

const Project = props => {
  console.log(props);
  return (
    <>
      <h1>{props.project.title}</h1>
      <div>{props.project.photo}</div>
      {props.project.private === true ? (
        <div>Request to Join</div>
      ) : (
        <div>Private</div>
      )}
      {props.project.onlineoption === true ? (
        <div>Online Options</div>
      ) : (
        <div>In Person</div>
      )}

      <h3>Creator:</h3>
      <p>
        {props.project.firstname} {props.project.lastname}
      </p>
      <h3>Collaborators:</h3>
      {props.project.collaborators.map(collaborator => {
        return (
          <p>
            {collaborator.firstname} {collaborator.lastname}
          </p>
        );
      })}
      <p>{props.project.description}</p>
    </>
  );
};

export default Project;
