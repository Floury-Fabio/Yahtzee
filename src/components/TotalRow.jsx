import React from 'react';
import PropTypes from 'prop-types';

import 'styles/TotalRow.css';

const TotalRow = ({ score }) => (
  <tr className="TotalRow">
    <td className="TotalRow-name">
      Total
    </td>
    <td className="TotalRow-description">
      {score}
    </td>
  </tr>
);

export default TotalRow;

TotalRow.propTypes = {
  score: PropTypes.number.isRequired,
};
