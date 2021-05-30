import React from 'react';
import PropTypes from 'prop-types';

import RuleRow from 'components/RuleRow';

import 'styles/RulesList.css';

const RulesList = ({ rules }) => (
  <table className="RulesList">
    {rules.map((rule) => <RuleRow rule={rule} />)}
  </table>
);

export default RulesList;

RulesList.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.object).isRequired,
};
