class Rule {
  sum(values) { // eslint-disable-line
    return values.reduce((acc, current) => acc + current);
  }

  getFreqs(values) { // eslint-disable-line
    const freqs = new Map();
    values.forEach((value) => freqs.set(value, (freqs.get(value) || 0) + 1));
    return Array.from(freqs.values());
  }
}

export default Rule;
