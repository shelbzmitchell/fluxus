import React from "react";
import { Link } from "react-router-dom";
import ListSubheader from "../components/ListSubheader";

const ProjectList = props => {
  return (
    <div className="projects">
      <ListSubheader />
      {props.projects.map(project => {
        if (project.private === "false") {
          return (
            <>
              {project.firstname === "Adrienne" &&
              project.lastname === "Mountain" ? (
                <Link
                  className="projects__link"
                  to={`/project/${project.id}/edit`}
                >
                  <div className="projects">
                    <div className="projects__pic"></div>
                    <p>{project.title}</p>
                    <p className="profiles__name">{`${project.firstname} ${project.lastname}`}</p>
                    <p className="profiles__location">{`${project.city}, ${project.country}`}</p>
                    <p className="profiles__medium">{project.keywords}</p>
                  </div>
                </Link>
              ) : (
                <Link className="projects__link" to={`/project/${project.id}`}>
                  <div className="projects">
                    <div className="projects__pic"></div>
                    <p>{project.title}</p>
                    <p className="profiles__name">{`${project.firstname} ${project.lastname}`}</p>
                    <p className="profiles__location">{`${project.city}, ${project.country}`}</p>
                    <p className="profiles__medium">{project.keywords}</p>
                  </div>
                </Link>
              )}
            </>
          );
        }
      })}
    </div>
  );
};

export default ProjectList;
