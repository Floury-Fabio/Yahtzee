import React from 'react';
import PropTypes from 'prop-types';

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
        <Dice idx={idx} switchLock={switchLock} locked={dice.locked} value={dice.value} />
      ))}
    </div>
  );
};

export default DiceSet;

DiceSet.propTypes = {
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDiceList: PropTypes.func.isRequired,
};
