import React from 'react';
import PropTypes from 'prop-types';

import 'styles/RuleRow.css';

const RuleRow = ({
  score, rule, evalScore, rollsCount,
}) => {
  const disabled = score || score === 0;
  const handleClick = () => {
    if (!disabled && rollsCount !== 3) { evalScore(rule); }
  };

  return (
    <tr className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`} onClick={handleClick}>
      <td className="RuleRow-name">
        {rule.name}
      </td>
      <td className="RuleRow-description">
        {disabled ? score : rule.description}
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
  rollsCount: PropTypes.number.isRequired,
  rule: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  score: PropTypes.number,
};
