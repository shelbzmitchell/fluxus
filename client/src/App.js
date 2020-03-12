import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/styles/main.css";
//import components
import Header from "./components/Header";
import ListSubheader from "./components/ListSubheader";
import Profile from "./components/Profile";
import ProfileList from "./components/ProfileList";

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
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Profile />
            </Route>
            <Route path="/search">
              <Header />
              <ListSubheader />
              <ProfileList />
            </Route>
          </Switch>
        </Router>
      </>
    );
    // }
  }
}
