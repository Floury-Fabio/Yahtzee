import React from 'react';
import PropTypes from 'prop-types';

import 'styles/Dice.css';

const Dice = ({
  idx, switchLock, locked, value, rolling, rollsCount,
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
    <>
      {rollsCount < 3
        ? <i className={classes} onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={idx} aria-label="dice" />
        : <div className="Dice Dice-empty" /> }
    </>
  );
};

export default Dice;

Dice.propTypes = {
  idx: PropTypes.number.isRequired,
  locked: PropTypes.bool.isRequired,
  rolling: PropTypes.bool.isRequired,
  rollsCount: PropTypes.number.isRequired,
  switchLock: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
