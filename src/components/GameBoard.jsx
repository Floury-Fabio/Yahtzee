import React, { useState } from 'react';

import DiceSet from 'components/DiceSet';

const GameBoard = () => {
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
    setDiceList(list);
  };

  return (
    <div>
      <h2> Yahtzee!! </h2>
      <DiceSet diceList={diceList} setDiceList={setDiceList} />
      <button className="GameBoard-roll-button" type="button" onClick={rollDices}> Roll! </button>
    </div>
  );
};
export default GameBoard;
