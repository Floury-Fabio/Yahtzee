import ValueRule from 'services/rules/ValueRule';

class FivesRule extends ValueRule {
  constructor() {
    super();
    this.name = 'Fives';
    this.description = '5 point per 5';
    this.expectedValue = 5;
  }
}

export default FivesRule;
