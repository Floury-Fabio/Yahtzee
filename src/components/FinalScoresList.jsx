import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import 'styles/FinalScoresModal.css';

const FinalScoresList = ({ storedScores }) => {
  const sortedScores = () => {
    if (!storedScores || !Array.isArray(storedScores)) {
      return [];
    }

    return storedScores.sort((a, b) => b.score - a.score);
  };

  const worstScore = () => {
    const score = sortedScores()[sortedScores().length - 1];
    return (
      <li key={uuid()} className="WorstScore" style={{ marginTop: '14px' }}>
        { `${score.nickname}: ${score.score}` }
      </li>
    );
  };

  const bestScores = () => {
    return sortedScores().slice(0, 10)
      .map((finalScore) => (
        <li key={uuid()}>
          { `${finalScore.nickname}: ${finalScore.score}` }
        </li>
      ));
  };

  if (sortedScores().length === 0) {
    return (<p> no score </p>);
  }

  return (
    <>
      {bestScores()}
      {worstScore()}
    </>
  );
};

export default FinalScoresList;

FinalScoresList.propTypes = {
  storedScores: PropTypes.arrayOf(PropTypes.object),
};

FinalScoresList.defaultProps = {
  storedScores: [],
};
