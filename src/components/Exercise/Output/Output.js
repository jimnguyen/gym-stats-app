import React from "react";

import classes from "./Output.module.css";

const Output = (props) => {
  return (
    <div className={classes.Output}>
      <h2>{props.exercise}</h2>
      <ul>
        <li>Weight: {props.weight}</li>
        <li>Reps: {props.reps}</li>
        <li>Sets: {props.sets}</li>
      </ul>
    </div>
  );
};

export default Output;
