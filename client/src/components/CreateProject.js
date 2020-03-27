import React, { Component } from "react";
import Multiselect from "react-multi-select-component";

//values for multiselect dropdown for collaborators
const options = [
  {
    id: "80",
    label: "Joanne Weaver",
    value: "Joanne Weaver",
    firstname: "Joanne",
    lastname: "Weaver"
  },
  {
    id: "81",
    label: "Rebecca Woods",
    value: "Rebecca Woods",
    firstname: "Rebecca",
    lastname: "Woods"
  },
  {
    id: "82",
    label: "Yucca Sam",
    value: "Yucca Sam",
    firstname: "Yucca",
    lastname: "Sam"
  },
  {
    id: "83",
    label: "Valley Tom",
    value: "Valley Tom",
    firstname: "Valley",
    lastname: "Tom"
  }
];

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      private: false,
      online: false,
      selected: []
    };
  }

  //state change for private and online setting checkboxes
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
    const { selected } = this.state;

    return (
      <div className="create">
        <div className="create__header-container">
          <h1 className="create__header">New Project</h1>
        </div>
        <form
          className="create__form"
          onSubmit={this.props.handleCreateFormSubmit}
          //pass new project submit event to app.js
        >
          <label className="create__title-label create__label">
            Title
            <input
              className="create__title create__input"
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

          <Multiselect
            className="create__collaborators"
            overrideStrings={{
              selectSomeItems: "Choose Collaborators...",
              search: "Search"
            }}
            options={options}
            value={selected}
            onChange={selected => this.setState({ selected })}
          />
          <input
            type="text"
            name="collaborators"
            hidden
            value={JSON.stringify(this.state.selected)}
            onChange={() => {
              console.log("select changed");
            }}
          />
          <label className="create__description-label create__label">
            Description
            <textarea
              name="description"
              placeholder="Description"
              className="create__description create__input"
            />
          </label>
          <label className="create__keywords-label create__label">
            Keywords
            <input
              className="create__keywords create__input"
              type="text"
              name="keywords"
              placeholder="Painting, Performance Art, Pencil Drawing, etc"
            />
          </label>
          <label className="create__city-label create__label">
            City
            <input
              className="create__city create__input"
              type="text"
              name="city"
              placeholder="Vancouver"
            />
          </label>
          <label className="create__province-label create__label">
            Province
            <input
              className="create__province create__input"
              type="text"
              name="province"
              placeholder="BC"
            />
          </label>
          <label className="create__country-label create__label">
            Country
            <input
              className="create__country create__input"
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
