import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'react-uuid';

import Dice from 'components/Dice';

import 'styles/GameBoard.css';

const GameBoard = ({
  diceList, rolling, switchLock, rollsCount,
}) => (
  <div className="GameBoard">
    {diceList.map((dice, idx) => (
      <Dice
        key={uuid()}
        idx={idx}
        switchLock={switchLock}
        locked={dice.locked}
        value={dice.value}
        rolling={rolling && !dice.locked}
        rollsCount={rollsCount}
      />
    ))}
  </div>
);

export default GameBoard;

GameBoard.propTypes = {
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  rolling: PropTypes.bool.isRequired,
  rollsCount: PropTypes.number.isRequired,
  switchLock: PropTypes.func.isRequired,
};
