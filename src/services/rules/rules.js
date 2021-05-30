import OnesRule from 'services/rules/OnesRule';
import TwosRule from 'services/rules/TwosRule';
import ThreesRule from 'services/rules/ThreesRule';
import FoursRule from 'services/rules/FoursRule';
import FivesRule from 'services/rules/FivesRule';
import SixesRule from 'services/rules/SixesRule';

const upperRules = [
  new OnesRule(),
  new TwosRule(),
  new ThreesRule(),
  new FoursRule(),
  new FivesRule(),
  new SixesRule(),
];

const lowerRules = [
  new OnesRule(),
];

export { lowerRules, upperRules };
