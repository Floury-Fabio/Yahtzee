import Rule from 'services/rules/Rule';

class FoulHouseRule extends Rule {
  constructor() {
    super();
    this.name = 'Full House';
    this.description = '25 points for a full house';
  }

  calcScore(values) {
    return this.freqs(values).includes(2) && this.freqs(values).includes(3) ? this.sum(values) : 0;
  }
}

export default FoulHouseRule;
