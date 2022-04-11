import React from 'react';
import PropTypes from 'prop-types';

import FinalScoresList from 'components/FinalScoresList';

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

  return (
    <div id="FinalScoresModal" className={`FinalScoresModal ${displayed ? 'FinalScoresModal-displayed' : ''}`}>
      <div className="FinalScoresModal-content">
        <span className="FinalScoresModal-close" role="button" tabIndex={0} onClick={handleClickClose} onKeyDown={handleKeyDownClose}>&times;</span>
        <h3 className="FinalScoresModal-title"> Final Scores </h3>
        <FinalScoresList />
      </div>
    </div>
  );
};

export default FinalScoresModal;

FinalScoresModal.propTypes = {
  displayed: PropTypes.bool.isRequired,
  setDisplayed: PropTypes.func.isRequired,
};
