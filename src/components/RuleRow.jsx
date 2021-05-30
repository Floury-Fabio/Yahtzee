import React from 'react';
import PropTypes from 'prop-types';

import 'styles/RuleRow.css';

const RuleRow = ({ rule }) => (
  <tr className="RuleRow">
    <td className="RuleRow-name">
      {rule.name}
    </td>
    <td className="RuleRow-description">
      {rule.description}
    </td>
  </tr>
);

export default RuleRow;

RuleRow.propTypes = {
  rule: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
