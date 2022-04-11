import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import 'styles/FinalScoresModal.css';

const FinalScoresModal = ({ displayed, setDisplayed }) => {
  const [sortedScore] = useState(
    JSON.parse(localStorage.getItem('finalScoresList'))
      .sort((a, b) => b.score - a.score),
  );

  const handleClickClose = () => {
    setDisplayed(false);
  };

  const handleKeyDownClose = (event) => {
    if (event.keyCode === 13) {
      setDisplayed(false);
    }
  };

  const finalScoresList = () => {
    return sortedScore.slice(0, 10)
      .map((finalScore) => (
        <li key={uuid()}>
          { `${finalScore.nickname}: ${finalScore.score}` }
        </li>
      ));
  };

  const worstScore = () => {
    const score = sortedScore.at(-1);
    return (
      <li key={uuid()} className="WorstScore" style={{ marginTop: '14px' }}>
        { `${score.nickname}: ${score.score}` }
      </li>
    );
  };

  return (
    <div id="FinalScoresModal" className={`FinalScoresModal ${displayed ? 'FinalScoresModal-displayed' : ''}`}>
      <div className="FinalScoresModal-content">
        <span className="FinalScoresModal-close" role="button" tabIndex={0} onClick={handleClickClose} onKeyDown={handleKeyDownClose}>&times;</span>
        <h3 className="FinalScoresModal-title"> Final Scores </h3>
        {finalScoresList()}
        {worstScore()}
      </div>
    </div>
  );
};

export default FinalScoresModal;

FinalScoresModal.propTypes = {
  displayed: PropTypes.bool.isRequired,
  setDisplayed: PropTypes.func.isRequired,
};
