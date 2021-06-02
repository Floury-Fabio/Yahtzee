import ValueRule from 'services/rules/ValueRule';

class FoursRule extends ValueRule {
  constructor() {
    super();
    this.name = 'Fours';
    this.description = '4 point per 4';
    this.expectedValue = 4;
  }
}

export default FoursRule;
