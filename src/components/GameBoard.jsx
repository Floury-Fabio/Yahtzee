import React from 'react';
import PropTypes from 'prop-types';

import DiceSet from 'components/DiceSet';

import 'styles/GameBoard.css';

const GameBoard = ({ diceList, setDiceList, rolling }) => (
  <div className="GameBoard">
    <DiceSet diceList={diceList} setDiceList={setDiceList} rolling={rolling} />
  </div>
);

export default GameBoard;

GameBoard.propTypes = {
  rolling: PropTypes.bool.isRequired,
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDiceList: PropTypes.func.isRequired,
};
