import Rule from 'services/rules/Rule';

class LargeStraightRule extends Rule {
  constructor() {
    super();
    this.name = 'Large Straight';
    this.description = '40 points for a large straight';
  }

  calcScore(values) { // eslint-disable-line class-methods-use-this
    const valuesSet = new Set(values);

    return valuesSet.size === 5 && (!valuesSet.has(1) || !valuesSet.has(6)) ? 40 : 0;
  }
}

export default LargeStraightRule;
