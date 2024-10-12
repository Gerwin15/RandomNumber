import React, {useState} from 'react';
import {TextField, Button, Typography} from '@mui/material';

const Guess = () => {
const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');


const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (numGuess > randomNumber) {
      setFeedback('Too high! Try again.');
    } else if (numGuess < randomNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Correct! You guessed the number.');
    }

    if (guess === '' || isNaN(guess)) {
        setFeedback('Enter a number first.');
        return;
      }
  };

  const refreshGame = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setGuess('');
    setFeedback('');
  };

  return (
    <div>
      <Typography variant="h5" style={{marginBottom: '15px'}}>Guess a Number Between 1 and 10</Typography>
      <TextField
        label="Your Guess"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleGuess} style = {{marginLeft: '15px', marginTop:'7px'}}>
        Submit
      </Button>
      <Button variant="outlined" color="primary" onClick={refreshGame} style={{ marginLeft: '15px', marginTop:'7px' }}>
        Another Game
      </Button>
      <Typography variant="body1">{feedback}</Typography>
    </div>
  );
};

export default Guess;