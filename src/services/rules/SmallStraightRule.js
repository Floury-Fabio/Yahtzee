import Rule from 'services/rules/Rule';

class SmallStraightRule extends Rule {
  constructor() {
    super();
    this.name = 'Small Straight';
    this.description = '25 points for a small straight';
  }

  calcScore(values) { // eslint-disable-line class-methods-use-this
    const valuesSet = new Set(values);
    // straight can be 234 + either 1 or 5
    if (valuesSet.has(2)
      && valuesSet.has(3)
      && valuesSet.has(4)
      && (valuesSet.has(1) || valuesSet.has(5))) {
      return 25;
    }

    // or 345 + either 2 or 6
    if (valuesSet.has(3)
      && valuesSet.has(4)
      && valuesSet.has(5)
      && (valuesSet.has(2) || valuesSet.has(6))) {
      return 25;
    }
    return 0;
  }
}

export default SmallStraightRule;
