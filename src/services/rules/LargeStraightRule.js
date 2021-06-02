import Rule from 'services/rules/Rule';

class SmallStraightRule extends Rule {
  constructor() {
    super();
    this.name = 'Large Straight';
    this.description = '40 points for a large straight';
  }

  calcScore(values) {
    const valuesSet = new Set(values);
    // straight can be 234 + either 1 or 5
    if (valuesSet.has(2)
      && valuesSet.has(3)
      && valuesSet.has(4)
      && (valuesSet.has(1) || valuesSet.has(5))) {
      return this.sum(values);
    }

    // or 345 + either 2 or 6
    if (valuesSet.has(3)
      && valuesSet.has(4)
      && valuesSet.has(5)
      && (valuesSet.has(2) || valuesSet.has(6))) {
      return this.sum(values);
    }
    return 0;
  }
}

export default SmallStraightRule;
