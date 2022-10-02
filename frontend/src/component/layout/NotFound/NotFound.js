import React from "react";
import notfound from '../../../images/notfound.png'
import "./NotFound.css";
// import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
    <p> OOPS!! The Page you are looking for does not exist...</p>
      <img src= {notfound} alt="oops! the page you are looking for is not available" />
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;