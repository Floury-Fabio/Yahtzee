import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import Dice from 'components/Dice';

import 'styles/DiceSet.css';

const DiceSet = ({ diceList, setDiceList }) => {
  const switchLock = (idx) => {
    if (diceList[idx].validated) { return; }
    const newDiceList = [...diceList];
    newDiceList[idx].locked = !newDiceList[idx].locked;
    setDiceList(newDiceList);
  };

  return (
    <div className="DiceSet">
      {diceList.map((dice, idx) => (
        <Dice
          key={uuid()}
          idx={idx}
          switchLock={switchLock}
          locked={dice.locked}
          value={dice.value}
          rolling={dice.rolling}
        />
      ))}
    </div>
  );
};

export default DiceSet;

DiceSet.propTypes = {
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDiceList: PropTypes.func.isRequired,
};
