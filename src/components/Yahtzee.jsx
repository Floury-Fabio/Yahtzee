import React, { useState } from 'react';

import GameBoard from 'components/GameBoard';
import RulesList from 'components/RulesList';
import RollButton from 'components/RollButton';

import { upperRules, lowerRules } from 'services/rules/rules';

import 'styles/Yahtzee.css';

const Yahtzee = () => {
  const [rollsCount, setRollsCount] = useState(2);
  const [scores, setScores] = useState({});

  const [diceList, setDiceList] = useState(() => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return {
        validated: false, rolling: false, locked: false, value: randValue,
      };
    });
  });

  const evalScore = (rule) => {
    const dicesValues = diceList.map((dice) => dice.value);
    setScores({ ...scores, [rule.name]: rule.calcScore(dicesValues) });
    setRollsCount(2);
  };

  const rollDices = () => {
    const list = diceList.map((dice) => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      if (dice.locked) { return { ...dice, validated: true }; }
      return { ...dice, value: randValue, rolling: true };
    });
    setRollsCount((currentRollsCount) => currentRollsCount - 1);
    setDiceList(list);
  };

  const score = Object.values(scores).reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <div>
      <div className="Yahtzee-head">
        <h2> Yahtzee!! </h2>
        <GameBoard diceList={diceList} setDiceList={setDiceList} rollsCount={rollsCount} />
        <RollButton rollDices={rollDices} rollsCount={rollsCount} />
      </div>
      <div className="Yahtzee-body">
        <h3 className="Yahtzee-body-title"> Upper </h3>
        <RulesList rules={upperRules} evalScore={evalScore} scores={scores} />
        <h3> Lower </h3>
        <RulesList rules={lowerRules} evalScore={evalScore} scores={scores} />
        <h4>
          {`Score ${score}`}
        </h4>
      </div>
    </div>
  );
};

export default Yahtzee;
