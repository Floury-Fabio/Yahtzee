import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'styles/EndGameModal.css';

const EndGameModal = ({ displayed, setDisplayed, score }) => {
  const [nickname, setNickname] = useState('');
  const handleClickClose = () => {
    setDisplayed(false);
  };

  const handleKeyDownClose = (event) => {
    if (event.keyCode === 13) {
      setDisplayed(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let scoresList = localStorage.getItem('scoresList');

    if (!scoresList) {
      scoresList = [];
    } else {
      scoresList = JSON.parse(scoresList);
    }

    scoresList.push({ nicknames: nickname, scorek: score });
    scoresList = JSON.stringify(scoresList);
    localStorage.setItem('scoresList', scoresList);
  };

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div id="EndGameModal" className={`EndGameModal ${displayed ? 'EndGameModal-displayed' : ''}`}>
      <div className="EndGameModal-content">
        <span className="EndGameModal-close" role="button" tabIndex={0} onClick={handleClickClose} onKeyDown={handleKeyDownClose}>&times;</span>
        <p>
          The game is ended your final score is:
        </p>
        <h3>
          { score }
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="EndGameModal-label-nickname" htmlFor="nickname">
            Nickname:
            <input className="EndGameModal-input-nickname" type="text" id="nickname" onChange={handleChange} value={nickname} />
          </label>
          <input className="EndGameModal-submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EndGameModal;

EndGameModal.propTypes = {
  displayed: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  setDisplayed: PropTypes.func.isRequired,
};
