import Rule from 'services/rules/Rule';

class LargeStraightRule extends Rule {
  constructor() {
    super();
    this.name = 'Small Straight';
    this.description = '30 points for a small straight';
  }

  calcScore(values) {
    const valuesSet = new Set(values);

    return valuesSet.size === 5 && (!valuesSet.has(1) || !valuesSet.has(6)) ? this.sum(values) : 0;
  }
}

export default LargeStraightRule;
