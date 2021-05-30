class Rule {
  static sum(values) {
    values.reduce((acc, current) => acc + current);
  }

  static getFreqs(values) {
    const freqs = new Map();
    values.forEach((value) => freqs.set(value, (freqs.get(value) || 0) + 1));
    return Array.from(freqs.values());
  }
}

export default Rule;
