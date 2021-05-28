import React from 'react';
import PropTypes from 'prop-types';

import 'styles/RollButton.css';

const RollButton = ({ rollsCount, rollDices }) => (
  <button className="RollButton" type="button" onClick={rollDices} disabled={rollsCount === 0}>
    {`${rollsCount} rolls left`}
  </button>
);

export default RollButton;

RollButton.propTypes = {
  rollDices: PropTypes.func.isRequired,
  rollsCount: PropTypes.number.isRequired,
};
