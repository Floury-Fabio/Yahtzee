import Rule from 'services/rules/Rule';

class LargeStraightRule extends Rule {
  calcScore(values) {
    const valuesSet = new Set(values);

    return valuesSet.size === 5 && (!valuesSet.has(1) || !valuesSet.has(6)) ? this.sum(values) : 0;
  }
}

export default LargeStraightRule;
