import React from 'react';
import PropTypes from 'prop-types';

import { bonusRule } from 'services/rules/rules';

import 'styles/BonusRow.css';

const BonusRow = ({ evalScore, upperRules, scores }) => {
  const upperScore = Object.entries(scores)
    .filter(([currentRuleName]) => (upperRules.some((rule) => (rule.name === currentRuleName))))
    .reduce((acc, [_currentRuleName, currentScore]) => (acc + currentScore), 0); // eslint-disable-line no-unused-vars, max-len

  const valid = upperScore > 63;

  if (valid && Object.keys(scores).includes(bonusRule.name)) {
    evalScore(bonusRule);
  }

  return (
    <tr className={`BonusRow BonusRow-${valid ? 'valid' : ''}`}>
      <td className="BonusRow-name">
        {bonusRule.name}
      </td>
      <td className="BonusRow-description">
        {valid ? 35 : bonusRule.description}
      </td>
    </tr>
  );
};

export default BonusRow;

BonusRow.propTypes = {
  evalScore: PropTypes.func.isRequired,
  upperRules: PropTypes.arrayOf(PropTypes.object).isRequired,
  scores: PropTypes.objectOf(PropTypes.number).isRequired,
};
