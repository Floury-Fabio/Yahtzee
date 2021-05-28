import React, { useState } from 'react';

import Dice from 'components/Dice';

import 'styles/DiceSet.css';

const DiceSet = () => {
  const [diceList, setDiceList] = useState(() => {
    const list = new Array(5).fill(1);
    return list.map(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      return { value: randValue };
    });
  });

  return (
    <div className="DiceSet">
      {diceList.map((dive) => <Dice value={dive.value} />)}
    </div>
  );
};

export default DiceSet;
