import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  console.log(props);
  return (
    <>
      <Link to={`/profile`}>
        <button onClick={() => props.loginClick()}>Log In</button>
      </Link>
    </>
  );
};

export default Home;
