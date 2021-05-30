import Rule from 'services/rules/Rule';

class ValueRule extends Rule {
  calcScore(values) {
    return values.filter((value) => value === this.expectedValue).length * this.expectedValue;
  }
}

export default ValueRule;
