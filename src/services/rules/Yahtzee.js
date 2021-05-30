import Rule from 'services/rules/Rule';

class YahtzeeRule extends Rule {
  calcScore(values) {
    return this.getFreqs(values)[0] === 5 ? this.sum(values) : 0;
  }
}

export default YahtzeeRule;
