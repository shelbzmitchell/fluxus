import React from "react";

const EditProject = props => {
  console.log(props);
  return (
    <div className="edit">
      <h3 className="edit__upload-header">Conversation</h3>
      <div className="edit__comments">
        {props.project.uploads.map(upload => {
          return (
            <div className="edit__comment">
              <h4 className="edit__name">{upload.firstname}</h4>
              <p className="edit__message">{upload.message}</p>
              <div className="edit__image">{upload.image}</div>
              <div className="edit__video">{upload.video}</div>
            </div>
          );
        })}
      </div>
      <form className="edit__form" onSubmit={props.handleFormSubmit}>
        <textarea
          className="edit__textarea"
          name="message"
          placeholder="Write a message"
        />
        <label className="edit__upload-label">
          Upload an Image
          <input
            className="edit__upload"
            id="image"
            type="file"
            accept=".jpg,.jpeg,.png,.tiff,.pdg,.bmp"
            name="image"
            placeholder="Uploade an Image"
          />
        </label>
        <label className="edit__upload-label">
          Upload a Video
          <input
            className="edit__upload"
            id="video"
            type="file"
            accept=".mp4,.png,.mpg,.mpeg,.mpe,.mpv,.avi,.wmv,.mov,.flv,.avchd"
            name="image"
            placeholder="Upload an Image"
          />
        </label>
        <div className="edit__submit-container">
          <button className="edit__submit" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
