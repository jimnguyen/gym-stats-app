import React, { useState } from "react";

import classes from "./Exercise.module.css";
import Output from "./Output/Output";

const Exercise = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [exercises, setExercises] = useState([]);

  const handleChangeExercise = (e) => {
    setExercise(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleChangeReps = (e) => {
    setReps(e.target.value);
  };

  const handleChangeSets = (e) => {
    setSets(e.target.value);
  };

  const handleClick = () => {
    const newExercise = {
      exercise: exercise,
      weight: weight,
      reps: reps,
      sets: sets,
    };

    const updatedExercises = [...exercises, newExercise];
    setExercises(updatedExercises);
    console.log(exercises);
    setClicked(true);
  };

  const handleDelete = (key) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(key, 1);
    setExercises(updatedExercises);
  };

  let output = null;

  if (clicked) {
    output = exercises.map((item, i) => {
      let key = i + item.exercise + new Date();
      return (
        <Output
          onClick={() => handleDelete(key)}
          key={key}
          exercise={item.exercise}
          weight={item.weight}
          reps={item.reps}
          sets={item.sets}
        />
      );
    });
  }

  return (
    <div className={classes.Exercise}>
      <form>
        <input
          type="text"
          placeholder="Exercise"
          id="exercise"
          onChange={handleChangeExercise}
        />
        <input
          type="text"
          id="weight"
          placeholder="Weight"
          onChange={handleChangeWeight}
        />
        <input
          type="text"
          placeholder="Reps"
          id="reps"
          onChange={handleChangeReps}
        />
        <input
          type="text"
          placeholder="Sets"
          id="sets"
          onChange={handleChangeSets}
        />
        <button type="button" onClick={handleClick}>
          Add exercise
        </button>
      </form>
      {output}
    </div>
  );
};

export default Exercise;
