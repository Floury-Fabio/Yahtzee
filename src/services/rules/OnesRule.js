import ValueRule from 'services/rules/ValueRule';

class OnesRule extends ValueRule {
  constructor() {
    super();
    this.name = 'Ones';
    this.description = '1 point per 1';
    this.expectedValue = 1;
  }
}

export default OnesRule;
