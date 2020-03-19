import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../src/styles/main.css";

//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileList from "./components/ProfileList";
import ProjectList from "./components/ProjectList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      profiles: [],
      projects: [],
      loggedIn: false,
      doneLoading: false
    };
  }

  componentDidMount() {
    axios
      .all([axios.get("/api/profiles"), axios.get("/api/projects")])

      .then(response => {
        this.setState({
          profiles: response[0].data,
          profile: response[0].data[0],
          projects: response[1].data,
          loggedIn: true,
          doneLoading: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  loginClick = () => {
    this.setState({
      loggedIn: true
    });
  };

  logoutClick = () => {
    this.setState({
      loggedIn: false
    });
  };

  render() {
    if (this.state.doneLoading === true) {
      return (
        <>
          <Router>
            <Header
              loggedIn={this.state.loggedIn}
              logoutClick={this.logoutClick}
            />
            <Switch>
              <Route
                path="/"
                render={() => <Home loginClick={this.loginClick} />}
                exact
              />
              <Route
                path="/main"
                render={props => (
                  <Profile {...props} profile={this.state.profile} />
                )}
              />
              <Route
                path="/profile/:id"
                render={props => (
                  <Profile
                    {...props}
                    profile={this.state.profiles[props.match.params.id]}
                    profiles={this.state.profiles}
                  />
                )}
              />
              <Route
                path="/search/profiles"
                render={props => (
                  <ProfileList {...props} profiles={this.state.profiles} />
                )}
              />
              <Route
                path="/search/projects"
                render={props => (
                  <ProjectList {...props} projects={this.state.projects} />
                )}
              />
            </Switch>
          </Router>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
