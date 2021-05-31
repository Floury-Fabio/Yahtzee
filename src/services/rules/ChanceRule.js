import Rule from 'services/rules/Rule';

class ChanceRule extends Rule {
  constructor() {
    super();
    this.name = 'Chance';
    this.description = 'Sum of all dices';
  }

  calcScore(values) {
    console.log(values);
    return this.sum(values);
  }
}

export default ChanceRule;
