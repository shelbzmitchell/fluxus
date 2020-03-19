import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <>
      <Link to={`/main`}>
        <button onClick={() => props.loginClick()}>Log In</button>
      </Link>
    </>
  );
};

export default Home;
