import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

import findTeamNameById from '../helpers/findTeamNameById';
import filterMatchesByDates from '../helpers/filterMatchesByDate';
import scoreCalculator from '../helpers/scoreCalculator';

const StyledWinnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50vh;
  transform: translateY(-50%);
  width: 35rem;
  height: 25rem;
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--color-blue-400);
  cursor: pointer;
  background-color: var(--color-blue-50);
`;

const TeamNameBox = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const TeamResultsBox = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Winner() {
  const navigate = useNavigate();
  const { matches, teams } = useContext(GlobalContext);
  const lastMatch = filterMatchesByDates('7/14/2024', '7/14/2024', matches);

  function handleClick(matchId) {
    navigate(`/match-details/${matchId}`);
  }

  let [scoreOfTeamA, scoreOfTeamB] = lastMatch[0].Score.split('-');
  let scoreOfTeamAWithPenalties = scoreCalculator(scoreOfTeamA);
  let scoreOfTeamBWithPenalties = scoreCalculator(scoreOfTeamB);

  const teamAName = findTeamNameById(teams, lastMatch[0].ATeamID);
  const teamBName = findTeamNameById(teams, lastMatch[0].BTeamID);
  return (
    <StyledWinnerBox onClick={() => handleClick(lastMatch[0].ID)}>
      <TeamNameBox>{teamAName}</TeamNameBox>
      <TeamResultsBox>
        {scoreOfTeamAWithPenalties} - {scoreOfTeamBWithPenalties}
      </TeamResultsBox>
      <TeamNameBox>{teamBName}</TeamNameBox>
    </StyledWinnerBox>
  );
}

export default Winner;
