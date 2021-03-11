import React, { useState } from "react";

import classes from "./Exercise.module.css";
import Output from "./Output/Output";

const Exercise = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
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
    setClicked(true);
    if (exercise === "" && weight === "" && reps === "" && sets === "") {
      console.log("IN");
      return;
    }
    console.log(clicked);

    const newExercise = {
      exercise: exercise,
      weight: weight,
      reps: reps,
      sets: sets,
    };

    const updatedExercises = [...exercises, newExercise];
    setExercises(updatedExercises);
    console.log(exercises);
    setExercise("");
    setWeight("");
    setReps("");
    setSets("");
  };

  const handleDelete = (key) => {
    const updatedExercises = exercises.filter((result, i) => {
      return result.exercise + i !== key;
    });
    setExercises(updatedExercises);
  };

  let output = null;

  if (clicked) {
    output = exercises.map((item, i) => {
      let key = item.exercise + i;
      return (
        <div key={key} onClick={() => handleDelete(key)}>
          <Output
            key={key}
            exercise={item.exercise}
            weight={item.weight}
            reps={item.reps}
            sets={item.sets}
          />
        </div>
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
          value={exercise}
          onChange={handleChangeExercise}
        />
        <input
          type="text"
          id="weight"
          placeholder="Weight"
          value={weight}
          onChange={handleChangeWeight}
        />
        <input
          type="text"
          placeholder="Reps"
          id="reps"
          value={reps}
          onChange={handleChangeReps}
        />
        <input
          type="text"
          placeholder="Sets"
          id="sets"
          value={sets}
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
