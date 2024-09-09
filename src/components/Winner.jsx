import styled from 'styled-components';
import PropTypes from 'prop-types';
import findTeamNameById from '../helpers/findTeamNameById';

const StyledWinnerBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50vh;
  transform: translateY(-50%);
  width: 35rem;
  height: 25rem;
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--color-blue-400);
`;

const TeamNameBox = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamResultsBox = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Winner({ matches, teams }) {
  const lastMatch = matches.slice(50, 51);

  let [scoreOfTeamA, scoreOfTeamB] = lastMatch[0].Score.split('-');
  let scoreOfTeamAWithPenalties = parseInt(scoreOfTeamA);
  let scoreOfTeamBWithPenalties = parseInt(scoreOfTeamB);

  if (scoreOfTeamA.includes('(') || scoreOfTeamB.includes('(')) {
    const [scoreA, penaltyA] = scoreOfTeamA.split('(');
    scoreOfTeamAWithPenalties = parseInt(scoreA) + parseInt(penaltyA || 0);

    const [scoreB, penaltyB] = scoreOfTeamB.split('(');
    scoreOfTeamBWithPenalties = parseInt(scoreB) + parseInt(penaltyB || 0);
  }
  const teamAName = findTeamNameById(teams, lastMatch[0].ATeamID);
  const teamBName = findTeamNameById(teams, lastMatch[0].BTeamID);
  return (
    <StyledWinnerBox>
      <TeamNameBox>{teamAName}</TeamNameBox>
      <TeamResultsBox>
        {scoreOfTeamAWithPenalties} - {scoreOfTeamBWithPenalties}
      </TeamResultsBox>
      <TeamNameBox>{teamBName}</TeamNameBox>
    </StyledWinnerBox>
  );
}

Winner.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Winner;
