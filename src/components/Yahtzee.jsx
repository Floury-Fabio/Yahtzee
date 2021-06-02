import React, { useState, useEffect } from 'react';

import EndGameModal from 'components/EndGameModal';
import GameBoard from 'components/GameBoard';
import RulesList from 'components/RulesList';
import RollButton from 'components/RollButton';

import { upperRules, lowerRules } from 'services/rules/rules';

import 'styles/Yahtzee.css';

const Yahtzee = () => {
  const [rollsCount, setRollsCount] = useState(2);
  const [scores, setScores] = useState({});
  const [rolling, setRolling] = useState(false);
  const [displayed, setDisplayed] = useState(false);

  const initDiceList = () => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return {
        validated: false, locked: false, value: randValue,
      };
    });
  };

  const animRoll = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  const [diceList, setDiceList] = useState(initDiceList());

  const evalScore = (rule) => {
    const dicesValues = diceList.map((dice) => dice.value);
    setScores({ ...scores, [rule.name]: rule.calcScore(dicesValues) });
    setRollsCount(2);
    setDiceList(initDiceList);
    animRoll();
  };

  const rollDices = () => {
    setDiceList(() => {
      const newDiceList = diceList.map((dice) => {
        const randValue = Math.floor(Math.random() * 6) + 1;
        if (dice.locked) { return { ...dice, validated: true }; }
        return { ...dice, value: randValue };
      });
      return newDiceList;
    });

    animRoll();
    setRollsCount((currentRollsCount) => currentRollsCount - 1);
  };

  const score = Object.values(scores).reduce((acc, currentValue) => acc + currentValue, 0);

  useEffect(() => {
    if (Object.keys(scores).length === upperRules.length + lowerRules.length) {
      setDisplayed(true);
    }
  }, [scores]);

  return (
    <div>
      <div className="Yahtzee-head">
        <h2> Yahtzee!! </h2>
        <GameBoard diceList={diceList} setDiceList={setDiceList} rolling={rolling} />
        <RollButton rollDices={rollDices} rollsCount={rollsCount} />
      </div>
      <div className="Yahtzee-body">
        <h3 className="Yahtzee-body-title"> Upper </h3>
        <RulesList rules={upperRules} evalScore={evalScore} scores={scores} />
        <h3 className="Yahtzee-body-title"> Lower </h3>
        <RulesList rules={lowerRules} evalScore={evalScore} scores={scores} />
        <h2>
          {`Total Score: ${score}`}
        </h2>
      </div>
      <EndGameModal displayed={displayed} score={score} setDisplayed={setDisplayed} />
    </div>
  );
};

export default Yahtzee;
