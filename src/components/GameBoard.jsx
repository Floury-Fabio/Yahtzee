import React, { useState } from 'react';
import RollButton from 'components/RollButton';

import DiceSet from 'components/DiceSet';

const GameBoard = () => {
  const [rollsCount, setRollsCount] = useState(2);
  const [diceList, setDiceList] = useState(() => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return { validated: false, locked: false, value: randValue };
    });
  });

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
