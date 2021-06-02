import OnesRule from 'services/rules/OnesRule';
import TwosRule from 'services/rules/TwosRule';
import ThreesRule from 'services/rules/ThreesRule';
import FoursRule from 'services/rules/FoursRule';
import FivesRule from 'services/rules/FivesRule';
import SixesRule from 'services/rules/SixesRule';
import ChanceRule from 'services/rules/ChanceRule';
import FourOfKindRule from 'services/rules/FourOfKindRule';
import FullHouseRule from 'services/rules/FullHouseRule';
import LargeStraightRule from 'services/rules/LargeStraightRule';
import SmallStraightRule from 'services/rules/SmallStraightRule';
import ThreeOfKindRule from 'services/rules/ThreeOfKindRule';
import Yahtzee from 'services/rules/Yahtzee';

const upperRules = [
  new OnesRule(),
  new TwosRule(),
  new ThreesRule(),
  new FoursRule(),
  new FivesRule(),
  new SixesRule(),
];

const lowerRules = [
  new ChanceRule(),
  new FourOfKindRule(),
  new FullHouseRule(),
  new LargeStraightRule(),
  new SmallStraightRule(),
  new ThreeOfKindRule(),
  new Yahtzee(),
];

export { lowerRules, upperRules };
