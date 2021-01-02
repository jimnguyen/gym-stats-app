import React, { Fragment, useState } from 'react';
import { FormControl, Typography, Button, TextField } from '@material-ui/core';

const App = () => {
	const [workout, setWorkout] = useState({
    exercise: '',
    weight: null
  });

  const [displayWorkout, setDisplayWorkout] = useState();

	const handleChangeExercise = (e) => {
    let newWorkout = {...workout, exercise: e.target.value}
		setWorkout(newWorkout);
  };
  
	const handleChangeWeight = (e) => {
    let newWorkout = {...workout, weight: e.target.value}
		setWorkout(newWorkout);
	};

	return (
		<Fragment>
			<div>
				<FormControl margin='normal'>
					<TextField id="outlined-basic" label='Exercise' variant="outlined" onChange={handleChangeExercise} />
					<TextField id="outlined-basic" label='Weight' variant="outlined" onChange={handleChangeWeight} />
					<Button onClick={() => setDisplayWorkout(true)} variant="contained">Add exercise!</Button>
				</FormControl>
				{displayWorkout ? <Typography>Your workout is : {workout.exercise} @ {workout.weight}</Typography> : null}
			</div>
		</Fragment>
	);
};

export default App;
