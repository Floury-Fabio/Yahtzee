import React from 'react';
import PropTypes from 'prop-types';

import { bonusRule } from 'services/rules/rules';

import 'styles/BonusRow.css';

const BonusRow = ({ valid }) => (
  <tr className={`BonusRow BonusRow-${valid ? 'valid' : ''}`}>
    <td className="BonusRow-name">
      {bonusRule.name}
    </td>
    <td className="BonusRow-description">
      {valid ? 35 : bonusRule.description}
    </td>
  </tr>
);

export default BonusRow;

BonusRow.propTypes = {
  valid: PropTypes.bool.isRequired,
};
