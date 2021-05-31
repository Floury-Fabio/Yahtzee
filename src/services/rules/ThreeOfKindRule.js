import Rule from 'services/rules/Rule';

class ThreeOfKindRule extends Rule {
  constructor() {
    super();
    this.name = 'Three of Kind';
    this.description = 'Sum all dices if 3 are the same';
  }

  calcScore(values) {
    return this.freqs(values).some((value) => value >= 3) ? this.sum(values) : 0;
  }
}

export default ThreeOfKindRule;
