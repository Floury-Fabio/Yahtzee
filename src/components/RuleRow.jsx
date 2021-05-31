import React from 'react';
import PropTypes from 'prop-types';

import 'styles/RuleRow.css';

const RuleRow = ({ score, rule, evalScore }) => {
  const handleClick = () => {
    evalScore(rule);
  };

  return (
    <tr className={`RuleRow RuleRow-${score || score === 0 ? 'disabled' : 'active'}`} onClick={handleClick}>
      <td className="RuleRow-name">
        {rule.name}
      </td>
      <td className="RuleRow-description">
        {rule.description}
      </td>
    </tr>
  );
};

export default RuleRow;

RuleRow.defaultProps = {
  score: null,
};

RuleRow.propTypes = {
  evalScore: PropTypes.func.isRequired,
  rule: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  score: PropTypes.number,
};
