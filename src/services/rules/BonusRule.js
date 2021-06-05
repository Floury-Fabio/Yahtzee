import Rule from 'services/rules/Rule';

class BonusRule extends Rule {
  constructor() {
    super();
    this.name = 'Bonus';
    this.description = '35 points if upper score > 63';
  }

  calcScore() { // eslint-disable-line class-methods-use-this
    return 35;
  }
}

export default BonusRule;
