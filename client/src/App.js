import React, { Component } from "react";
import "../src/styles/main.css";
//import components
import Header from "./components/Header";
import Profile from "./components/Profile";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      projects: [],
      doneLoading: false
    };
  }

  render() {
    // if (this.state.doneLoading === true) {
    return (
      <>
        <Header />
        <Profile />
      </>
    );
    // }
  }
}
