import React, { useState, useEffect } from 'react';

import EndGameModal from 'components/EndGameModal';
import FinalScoresModal from 'components/FinalScoresModal';
import GameBoard from 'components/GameBoard';
import RulesList from 'components/RulesList';
import RollButton from 'components/RollButton';

import { upperRules, lowerRules } from 'services/rules/rules';

import 'styles/Yahtzee.css';

const Yahtzee = () => {
  const [rollsCount, setRollsCount] = useState(3);
  const [scores, setScores] = useState({});
  const [rolling, setRolling] = useState(false);
  const [endGameModaldisplayed, setEndGameModalDisplayed] = useState(false);
  const [finalScoreDisplayed, setFinalScoreDisplayed] = useState(false);

  const score = Object.values(scores).reduce((acc, currentValue) => acc + currentValue, 0);
  const gameIsEnded = Object.keys(scores).length === upperRules.length + lowerRules.length;

  const initDiceList = () => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return {
        validated: false, locked: false, value: randValue,
      };
    });
  };

  const [diceList, setDiceList] = useState(initDiceList());

  const animRoll = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  const evalScore = (rule) => {
    const dicesValues = diceList.map((dice) => dice.value);
    setScores({ ...scores, [rule.name]: rule.calcScore(dicesValues) });
    setRollsCount(3);
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

  const handleClickFinalScores = () => {
    setFinalScoreDisplayed(true);
  };

  const switchLock = (idx) => {
    if (rollsCount === 0) { return; }
    if (diceList[idx].validated) { return; }
    const newDiceList = [...diceList];
    newDiceList[idx].locked = !newDiceList[idx].locked;
    setDiceList(newDiceList);
  };

  useEffect(() => {
    if (gameIsEnded) {
      setEndGameModalDisplayed(true);
    }
  }, [scores]);

  return (
    <div className="Yahtzee">
      <div className="Yahtzee-head">
        <h2> Yahtzee!! </h2>
        <GameBoard
          diceList={diceList}
          rolling={rolling}
          rollsCount={rollsCount}
          setDiceList={setDiceList}
          switchLock={switchLock}
        />
        <RollButton rollDices={rollDices} rollsCount={rollsCount} rolling={rolling} />
      </div>
      <div className="Yahtzee-body">
        <h3 className="Yahtzee-body-title"> Upper </h3>
        <RulesList rules={upperRules} evalScore={evalScore} scores={scores} />
        <h3 className="Yahtzee-body-title"> Lower </h3>
        <RulesList rules={lowerRules} evalScore={evalScore} scores={scores} />
        <button className="Yahtzee-finalScores-button" type="button" onClick={handleClickFinalScores}>
          FinalScores
        </button>
        <h2>
          {`Total Score: ${score}`}
        </h2>
      </div>
      <FinalScoresModal displayed={finalScoreDisplayed} setDisplayed={setFinalScoreDisplayed} />
      <EndGameModal
        displayed={endGameModaldisplayed}
        score={score}
        setDisplayed={setEndGameModalDisplayed}
      />
    </div>
  );
};

export default Yahtzee;
