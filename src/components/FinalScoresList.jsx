import React, { useState, useEffect } from 'react';

import uuid from 'react-uuid';

import 'styles/FinalScoresModal.css';

const FinalScoresList = () => {
  const [sortedScores, setSortedScores] = useState();

  const worstScore = () => {
    const score = sortedScores.at(-1);
    return (
      <li key={uuid()} className="WorstScore" style={{ marginTop: '14px' }}>
        { `${score.nickname}: ${score.score}` }
      </li>
    );
  };

  const bestScores = () => {
    return sortedScores.slice(0, 10)
      .map((finalScore) => (
        <li key={uuid()}>
          { `${finalScore.nickname}: ${finalScore.score}` }
        </li>
      ));
  };

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('finalScoresList'));
    if (scores) {
      setSortedScores(scores.sort((a, b) => b.score - a.score));
    }
  }, []);

  if (!sortedScores) {
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
