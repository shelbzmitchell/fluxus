import React from "react";
import { Link } from "react-router-dom";
import ListSubheader from "../components/ListSubheader";

const ProjectList = props => {
  return (
    <div className="projects">
      <ListSubheader />
      <div className="projects__container">
        {props.projects
          .filter(project => project.private === "false")
          .map((project, index) => {
            return (
              <div key={index}>
                {project.creatorid === "0" ? (
                  <Link
                    className="projects__link"
                    to={`/project/${project.id}/edit`}
                  >
                    <div className="projects__project">
                      <p className="projects__title">{project.title}</p>
                      <div className="projects__name-loc">
                        <p className="projects__name">{`${project.firstname} ${project.lastname}`}</p>
                        <p className="projects__location">{`${project.city}, ${project.country}`}</p>
                      </div>
                      <p className="projects__medium">{project.keywords}</p>
                    </div>
                  </Link>
                ) : (
                  <Link
                    className="projects__link"
                    to={`/project/${project.id}`}
                  >
                    <div className="projects__project">
                      <div className="projects__pic"></div>
                      <p className="projects__title">{project.title}</p>
                      <div className="projects__name-loc">
                        <p className="projects__name">{`${project.firstname} ${project.lastname}`}</p>
                        <p className="projects__location">{`${project.city}, ${project.country}`}</p>
                      </div>
                      <p className="projects__medium">{project.keywords}</p>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectList;
