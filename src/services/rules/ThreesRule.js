import ValueRule from 'services/rules/ValueRule';

class ThreesRule extends ValueRule {
  constructor() {
    super();
    this.name = 'Threes';
    this.description = '3 point per 3';
    this.expectedValue = 3;
  }
}

export default ThreesRule;
