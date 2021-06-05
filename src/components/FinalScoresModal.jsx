import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import 'styles/FinalScoresModal.css';

const FinalScoresModal = ({ displayed, setDisplayed }) => {
  const handleClickClose = () => {
    setDisplayed(false);
  };

  const handleKeyDownClose = (event) => {
    if (event.keyCode === 13) {
      setDisplayed(false);
    }
  };

  const finalScoresList = JSON.parse(localStorage.getItem('finalScoresList'));

  return (
    <div id="FinalScoresModal" className={`FinalScoresModal ${displayed ? 'FinalScoresModal-displayed' : ''}`}>
      <div className="FinalScoresModal-content">
        <span className="FinalScoresModal-close" role="button" tabIndex={0} onClick={handleClickClose} onKeyDown={handleKeyDownClose}>&times;</span>
        <h3 className="FinalScoresModal-title"> Final Scores </h3>
        {finalScoresList
          ? finalScoresList.map((finalScore) => (
            <li key={uuid()}>
              { `${finalScore.nickname}: ${finalScore.score}` }
            </li>
          ))
          : <p> fefsd </p> }
      </div>
    </div>
  );
};

export default FinalScoresModal;

FinalScoresModal.propTypes = {
  displayed: PropTypes.bool.isRequired,
  setDisplayed: PropTypes.func.isRequired,
};
