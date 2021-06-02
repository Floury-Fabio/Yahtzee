import React from 'react';
import PropTypes from 'prop-types';

import RuleRow from 'components/RuleRow';

import 'styles/RulesList.css';

const RulesList = ({ rules, scores, evalScore }) => (
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
    </tbody>
  </table>
);

export default RulesList;

RulesList.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.object).isRequired,
  scores: PropTypes.objectOf(PropTypes.number).isRequired,
  evalScore: PropTypes.func.isRequired,
};
