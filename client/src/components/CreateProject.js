import React, { Component } from "react";

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      private: false,
      online: false
    };
  }

  //state change for radio buttons in create project
  handleInputChange = event => {
    const target = event.target;
    if (target.name === "online") {
      this.setState({
        online: target.checked
      });
    } else if (target.name === "private") {
      this.setState({
        private: target.checked
      });
    }
  };

  render() {
    return (
      <div className="create">
        <form
          className="create__form"
          onSubmit={this.props.handleCreateFormSubmit}
        >
          <label className="create__title-label create__label">
            Title:
            <input
              className="create__title"
              type="text"
              name="title"
              placeholder="Title"
            />
          </label>
          <div className="create__checkbox">
            <label className="create__private-label create__label">
              Private
              <input
                className="create__private"
                type="checkbox"
                name="private"
                checked={this.state.privatevalue}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="create__online-label create__label">
              Online Option
              <input
                className="create__online"
                type="checkbox"
                name="online"
                checked={this.state.onlinevalue}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <label className="create__collaborators-label create__label">
            Invite Collaborators?
            {/* <select
              id="collaborators"
              className="create__collaborators"
              multiple={true}
              // value={[
              //   "Joanne Weaver",
              //   "Rebecca Woods",
              //   "Yucca Sam",
              //   "Valley Tom"
              // ]}
            >
              <option value="Joanne Weaver">Joanne Weaver</option>
              <option value="Rebecca Woods">Rebecca Woods</option>
              <option value="Yucca Sam">Yucca Sam</option>
              <option value="Valley Tom">Valley Tom</option>
            </select> */}
          </label>
          <label className="create__description-label create__label">
            Description:
            <textarea
              name="description"
              placeholder="Description"
              className="create__description"
            />
          </label>
          <label className="create__keywords-label create__label">
            Keywords:
            <input
              className="create__keywords"
              type="text"
              name="keywords"
              placeholder="Painting, Performance Art, Pencil Drawing, etc"
            />
          </label>
          <label className="create__city-label create__label">
            City:
            <input
              className="create__city"
              type="text"
              name="city"
              placeholder="Vancouver"
            />
          </label>
          <label className="create__province-label create__label">
            Province:
            <input
              className="create__province"
              type="text"
              name="province"
              placeholder="BC"
            />
          </label>
          <label className="create__country-label create__label">
            Country:
            <input
              className="create__country"
              type="text"
              name="country"
              placeholder="Canada"
            />
          </label>
          <div className="create__submit-container">
            <button className="create__submit" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}
