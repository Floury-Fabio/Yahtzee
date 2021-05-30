import ValueRule from 'services/rules/ValueRule';

class TwosRule extends ValueRule {
  constructor() {
    super();
    this.name = 'Twos';
    this.description = '2 point per 2';
    this.expectedValue = 2;
  }
}

export default TwosRule;
