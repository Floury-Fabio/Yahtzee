import React from 'react';
import PropTypes from 'prop-types';

import RuleRow from 'components/RuleRow';

import 'styles/RulesList.css';

const RulesList = ({
  evalScore, rules, scores, children, rollsCount,
}) => (
  <table className="RulesList" cellSpacing="0">
    <tbody>
      {rules.map((rule) => (
        <RuleRow
          key={rule.name}
          rollsCount={rollsCount}
          rule={rule}
          score={scores[rule.name]}
          evalScore={evalScore}
        />
      ))}
      { children }
    </tbody>
  </table>
);

export default RulesList;

RulesList.defaultProps = {
  children: null,
};

RulesList.propTypes = {
  children: PropTypes.node,
  evalScore: PropTypes.func.isRequired,
  rules: PropTypes.arrayOf(PropTypes.object).isRequired,
  rollsCount: PropTypes.number.isRequired,
  scores: PropTypes.objectOf(PropTypes.number).isRequired,
};
