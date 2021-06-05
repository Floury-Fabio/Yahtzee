import React from 'react';
import PropTypes from 'prop-types';

import { bonusRule } from 'services/rules/rules';

import 'styles/BonusRow.css';

const BonusRow = ({ evalScore, upperScore }) => {
  const valid = upperScore > 63;

  if (valid) {
    evalScore(bonusRule);
  }

  return (
    <tr className={`BonusRow BonusRow-${upperScore > 63 ? 'valid' : ''}`}>
      <td className="BonusRow-name">
        {bonusRule.name}
      </td>
      <td className="BonusRow-description">
        {valid ? 63 : bonusRule.description}
      </td>
    </tr>
  );
};

export default BonusRow;

BonusRow.propTypes = {
  evalScore: PropTypes.func.isRequired,
  upperScore: PropTypes.number.isRequired,
};
