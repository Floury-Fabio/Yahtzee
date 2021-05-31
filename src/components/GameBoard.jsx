import React from 'react';
import PropTypes from 'prop-types';

import DiceSet from 'components/DiceSet';

const GameBoard = ({ diceList, setDiceList }) => (
  <div>
    <DiceSet diceList={diceList} setDiceList={setDiceList} />
  </div>
);

export default GameBoard;

GameBoard.propTypes = {
  diceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDiceList: PropTypes.func.isRequired,
};
