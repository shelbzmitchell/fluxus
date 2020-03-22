import React from "react";
import Project from "../components/Project";

const EditProject = props => {
  console.log(props);
  return (
    <>
      <div className="edit__comments">
        {props.project.uploads.map(upload => {
          return (
            <>
              <h4>{upload.firstname}</h4>
              <p>{upload.message}</p>
              <div>{upload.image}</div>
              <div>{upload.video}</div>
              <div>{upload.audio}</div>
            </>
          );
        })}
      </div>
      <form>
        <textarea name="message" placeholder="Write a message" />
        <button type="submit" name="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default EditProject;
