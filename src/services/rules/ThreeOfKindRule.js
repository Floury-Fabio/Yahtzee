import Rule from 'services/rules/Rule';

class ThreeOfKindRule extends Rule {
  calcScore(values) {
    return this.freqs(values).some((value) => value >= 3) ? this.sum(values) : 0;
  }
}

export default ThreeOfKindRule;
