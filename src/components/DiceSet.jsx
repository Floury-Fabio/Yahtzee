import React, { useState } from 'react';

import Dice from 'components/Dice';

import 'styles/DiceSet.css';

const DiceSet = () => {
  const [diceList, setDiceList] = useState(() => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return { locked: false, value: randValue };
    });
  });

  const switchLock = (idx) => {
    const newDiceList = [...diceList];
    newDiceList[idx].locked = !newDiceList[idx].locked;
    setDiceList(newDiceList);
  };

  return (
    <div className="DiceSet">
      {diceList.map((dice, idx) => (
        <Dice idx={idx} switchLock={switchLock} locked={dice.locked} value={dice.value} />
      ))}
    </div>
  );
};

export default DiceSet;
