import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import RuleRow from 'components/RuleRow';

import 'styles/RulesList.css';

const RulesList = ({ rules, scores, evalScore }) => (
  <table className="RulesList">
    <tbody>
      {rules.map((rule) => (
        <RuleRow
          key={uuid()}
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
