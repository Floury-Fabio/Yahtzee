import React from 'react';
import PropTypes from 'prop-types';

import 'styles/RollButton.css';

const RollButton = ({ rollsCount, rollDices, rolling }) => {
  const disabled = (rollsCount === 0 || rolling);
  const handleClick = () => {
    if (disabled) { return; }
    rollDices();
  };

  const textButton = (rollsCount === 3 ? 'Play' : `${rollsCount} rolls left`);

  return (
    <button className="RollButton" type="button" onClick={handleClick} disabled={disabled}>
      {textButton}
    </button>
  );
};

export default RollButton;

RollButton.propTypes = {
  rollDices: PropTypes.func.isRequired,
  rolling: PropTypes.bool.isRequired,
  rollsCount: PropTypes.number.isRequired,
};
