import Rule from 'services/rules/Rule';

class ChanceRule extends Rule {
  calcScore(values) {
    return this.sum(values);
  }
}

export default ChanceRule;
