import Rule from 'services/rules/Rule';

class YahtzeeRule extends Rule {
  constructor() {
    super();
    this.name = 'Yahtzee';
    this.description = '50 points for a Yahtzee';
  }

  calcScore(values) {
    return this.getFreqs(values)[0] === 5 ? this.sum(values) : 0;
  }
}

export default YahtzeeRule;
