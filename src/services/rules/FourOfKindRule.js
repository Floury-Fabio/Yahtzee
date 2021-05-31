import Rule from 'services/rules/Rule';

class FourOfKindRule extends Rule {
  constructor() {
    super();
    this.name = 'Four of Kind';
    this.description = 'Sum all dices if 4 are the same';
  }

  calcScore(values) {
    return this.getFreqs(values).some((value) => value >= 4) ? this.sum(values) : 0;
  }
}

export default FourOfKindRule;
