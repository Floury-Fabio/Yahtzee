import React from 'react';
import PropTypes from 'prop-types';

import BonusRow from 'components/BonusRow';
import RuleRow from 'components/RuleRow';

import 'styles/RulesList.css';

const RulesList = ({
  evalScore, isUpper, rules, scores,
}) => {
  const upperScore = Object.values(scores).reduce((acc, currentValue) => (acc + currentValue), 0);
  return (
    <table className="RulesList" cellSpacing="0">
      <tbody>
        {rules.map((rule) => (
          <RuleRow
            key={rule.name}
            rule={rule}
            score={scores[rule.name]}
            evalScore={evalScore}
          />
        ))}
        {isUpper && <BonusRow evalScore={evalScore} upperScore={upperScore} />}
      </tbody>
    </table>
  );
};

export default RulesList;

RulesList.defaultProps = {
  isUpper: false,
};

RulesList.propTypes = {
  evalScore: PropTypes.func.isRequired,
  isUpper: PropTypes.bool,
  rules: PropTypes.arrayOf(PropTypes.object).isRequired,
  scores: PropTypes.objectOf(PropTypes.number).isRequired,
};
