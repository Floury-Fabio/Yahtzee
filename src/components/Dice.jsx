import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import 'styles/Dice.css';

const Dice = ({
  idx, switchLock, locked, value,
}) => {
  const diceNames = ['one', 'two', 'three', 'four', 'five', 'six'];
  const classes = `Dice ${locked ? 'Dice-locked' : ''} fas fa-dice-${diceNames[value - 1]} fa-4x `;
  const handleClick = () => {
    switchLock(idx);
  };

  const handleKeyDown = () => {
    console.log('ke');
  };

  return (

  // <div className={`Dice ${locked ? 'Dice-locked' : ''}`}
  // onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={idx}>
  //   <FontAwesomeIcon icon={['fas', 'fa-dice-four']} />
  // </div>
    <i className={classes} />
  );
};

export default Dice;

Dice.propTypes = {
  idx: PropTypes.number.isRequired,
  switchLock: PropTypes.func.isRequired,
  locked: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
