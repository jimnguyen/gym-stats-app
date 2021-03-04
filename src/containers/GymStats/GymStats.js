import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Exercise from "../../components/Exercise/Exercise";
import classes from "./GymStats.module.css";

const GymStats = () => {
  return (
    <div className={classes.GymStats}>
      <NavBar />
      <h1>Enter your exercise below!</h1>
      <Exercise />
    </div>
  );
};

export default GymStats;
