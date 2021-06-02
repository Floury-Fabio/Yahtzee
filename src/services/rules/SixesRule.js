import ValueRule from 'services/rules/ValueRule';

class SixesRule extends ValueRule {
  constructor() {
    super();
    this.name = 'SixesRule';
    this.description = '6 point per 6';
    this.expectedValue = 6;
  }
}

export default SixesRule;
