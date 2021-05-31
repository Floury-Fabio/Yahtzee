import React from 'react';

import GameBoard from 'components/GameBoard';
import RulesList from 'components/RulesList';

import { upperRules, lowerRules } from 'services/rules/rules';

const Yahtzee = () => (
  <div>
    <GameBoard />
    <h3> Upper </h3>
    <RulesList rules={upperRules} />
    <h3> Lower </h3>
    <RulesList rules={lowerRules} />
  </div>
);

export default Yahtzee;
