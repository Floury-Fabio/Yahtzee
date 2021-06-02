import React from 'react';
import PropTypes from 'prop-types';

import 'styles/Dice.css';

const Dice = ({
  idx, switchLock, locked, value, rolling,
}) => {
  const diceNames = ['one', 'two', 'three', 'four', 'five', 'six'];
  const classes = `Dice ${locked ? 'Dice-locked' : ''} ${rolling ? 'Dice-rolling' : ''} fas fa-dice-${diceNames[value - 1]} fa-4x `;
  const handleClick = () => {
    switchLock(idx);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      switchLock(idx);
    }
  };

  return (

    <i className={classes} onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={idx} aria-label="dice" />
  );
};

export default Dice;

Dice.propTypes = {
  idx: PropTypes.number.isRequired,
  locked: PropTypes.bool.isRequired,
  switchLock: PropTypes.func.isRequired,
  rolling: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
