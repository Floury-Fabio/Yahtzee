import React from 'react';
import PropTypes from 'prop-types';

import 'styles/Dice.css';

const Dice = ({
  idx, switchLock, locked, value,
}) => {
  const handleClick = () => {
    switchLock(idx);
  };

  const handleKeyDown = () => {
    console.log('ke');
  };

  return (
    <div className={`Dice ${locked ? 'Dice-locked' : ''}`} onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={idx}>
      {value}
    </div>
  );
};

export default Dice;

Dice.propTypes = {
  idx: PropTypes.number.isRequired,
  switchLock: PropTypes.func.isRequired,
  locked: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
