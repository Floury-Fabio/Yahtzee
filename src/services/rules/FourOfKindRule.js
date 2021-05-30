import Rule from 'services/rules/Rule';

class FourOfKindRule extends Rule {
  calcScore(values) {
    return this.freqs(values).some((value) => value >= 4) ? this.sum(values) : 0;
  }
}

export default FourOfKindRule;
