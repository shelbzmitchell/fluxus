import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../src/styles/main.css";

//import components
import Header from "./components/Header";
import Home from "./components/Home";
import ListSubheader from "./components/ListSubheader";
import Profile from "./components/Profile";
import ProfileList from "./components/ProfileList";

export default class App extends Component {
  constructor() {
    super();
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
      .get("/api/profiles")
      .then(response => {
        this.setState({
          profiles: response.data,
          profile: response.data[0],
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
                path="/profile"
                render={() => <Profile profile={this.state.profile} />}
              />
              <Route path="/search">
                <ListSubheader />
                <ProfileList />
              </Route>
            </Switch>
          </Router>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
