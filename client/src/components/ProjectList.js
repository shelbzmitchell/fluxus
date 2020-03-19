import React from "react";
import ListSubheader from "../components/ListSubheader";

const ProjectList = props => {
  return (
    <>
      <ListSubheader />
      <div>
        <h1>Projects</h1>
        {props.projects.map(project => {
          return (
            <div className="projects">
              <div className="projects__pic"></div>
              <p>{project.title}</p>
              <p className="profiles__name">{`${project.firstname} ${project.lastname}`}</p>
              <p className="profiles__location">{`${project.city}, ${project.country}`}</p>
              <p className="profiles__medium">{project.keywords}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
