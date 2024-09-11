import scoreCalculator from './scoreCalculator';

function getWinner(match) {
  const [scoreOfTeamA, scoreOfTeamB] = match.Score.split('-');
  let scoreOfTeamAWithPenalties = scoreCalculator(scoreOfTeamA);
  let scoreOfTeamBWithPenalties = scoreCalculator(scoreOfTeamB);

  if (scoreOfTeamAWithPenalties > scoreOfTeamBWithPenalties) {
    return match.ATeamID;
  } else {
    return match.BTeamID;
  }
}

export default getWinner;
