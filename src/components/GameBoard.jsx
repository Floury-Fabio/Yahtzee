import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import Dice from 'components/Dice';

import 'styles/GameBoard.css';

const GameBoard = ({ diceList, setDiceList, rolling }) => {
  const switchLock = (idx) => {
    if (diceList[idx].validated) { return; }
    const newDiceList = [...diceList];
    newDiceList[idx].locked = !newDiceList[idx].locked;
    setDiceList(newDiceList);
  };

  return (
    <div className="GameBoard">
      {diceList.map((dice, idx) => (
        <Dice
          key={uuid()}
          idx={idx}
          switchLock={switchLock}
          locked={dice.locked}
          value={dice.value}
          rolling={rolling && !dice.locked}
        />
      ))}
    </div>
  );
};

export default GameBoard;

GameBoard.propTypes = {
  rolling: PropTypes.bool.isRequired,
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDiceList: PropTypes.func.isRequired,
};
