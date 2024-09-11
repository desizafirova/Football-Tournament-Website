function scoreCalculator(score) {
  if (score.includes('(')) {
    const [scoreWithoutPenalties, penalties] = score.split('(');
    return (
      parseInt(scoreWithoutPenalties, 10) + parseInt(penalties, 10 || '0', 10)
    );
  }
  return parseInt(score, 10);
}

export default scoreCalculator;
