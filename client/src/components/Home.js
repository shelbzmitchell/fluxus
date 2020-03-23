import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  if (props.loggedIn === false) {
    return (
      <section className="home">
        <div className="home__header-container">
          <h1 className="home__header">Fluxus</h1>
        </div>
        <Link to={`/main`}>
          <div className="home__login-container">
            <button className="home__login" onClick={() => props.loginClick()}>
              Log In
            </button>
          </div>
        </Link>
      </section>
    );
  } else {
    return null;
  }
};

export default Home;
