import React from 'react';

import GameBoard from 'components/GameBoard';
import RulesList from 'components/RulesList';

import { upperRules } from 'services/rules/rules';

const Yahtzee = () => (
  <div>
    <GameBoard />
    <h3> Upper </h3>
    <RulesList rules={upperRules} />
  </div>
);

export default Yahtzee;
