import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RollButton from 'components/RollButton';

import DiceSet from 'components/DiceSet';

const GameBoard = ({ diceList, setDiceList }) => {
  const [rollsCount, setRollsCount] = useState(2);

  const rollDices = () => {
    const list = diceList.map((dice) => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      if (dice.locked) { return { ...dice, validated: true }; }
      return { ...dice, value: randValue };
    });
    setRollsCount((currentRollsCount) => currentRollsCount - 1);
    setDiceList(list);
  };

  return (
    <div>
      <h2> Yahtzee!! </h2>
      <DiceSet diceList={diceList} setDiceList={setDiceList} />
      <RollButton rollDices={rollDices} rollsCount={rollsCount} />
    </div>
  );
};
export default GameBoard;

GameBoard.propTypes = {
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDiceList: PropTypes.func.isRequired,
};
