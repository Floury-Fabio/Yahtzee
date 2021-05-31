import React, { useState } from 'react';

import GameBoard from 'components/GameBoard';
import RulesList from 'components/RulesList';

import { upperRules, lowerRules } from 'services/rules/rules';

const Yahtzee = () => {
  const [scores, setScores] = useState({});
  const [diceList, setDiceList] = useState(() => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return { validated: false, locked: false, value: randValue };
    });
  });

  const evalScore = (rule) => {
    const dicesValues = diceList.map((dice) => dice.value);
    setScores({ ...scores, [rule.name]: rule.calcScore(dicesValues) });
  };

  const score = Object.values(scores).reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <div>
      <GameBoard diceList={diceList} setDiceList={setDiceList} />
      <h3> Upper </h3>
      <RulesList rules={upperRules} evalScore={evalScore} scores={scores} />
      <h3> Lower </h3>
      <RulesList rules={lowerRules} evalScore={evalScore} scores={scores} />
      <h4>
        {`Score ${score}`}
      </h4>
    </div>
  );
};

export default Yahtzee;
