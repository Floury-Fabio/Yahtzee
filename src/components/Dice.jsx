import React from 'react';
import PropTypes from 'prop-types';

import 'styles/Dice.css';

const Dice = ({ value }) => (
  <div className="Dice">
    {value}
  </div>
);

export default Dice;

Dice.propTypes = {
  value: PropTypes.number.isRequired,
};
