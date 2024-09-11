import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../GlobalContext';
import { useParams } from 'react-router-dom';

import Spinner from './Spinner';

const StyledMatchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: var(--color-stone-500);
  margin: 3rem;
  gap: 4rem;
  border-bottom: 1px solid var(--color-stone-300);

  @media (max-width: 39em) {
    font-size: 1.6rem;
  }
`;

const TeamName = styled.span`
  font-size: 3.6rem;

  @media (max-width: 39em) {
    font-size: 1.6rem;
  }
`;

function MatchResult() {
  const { matches, isLoadingMatches, teams, isLoadingTeams } =
    useContext(GlobalContext);
  const matchId = useParams();
  if (isLoadingMatches || isLoadingTeams) return <Spinner />;

  const currMatch = matches.find((match) => match.ID === matchId.id);
  const teamA = teams.find((team) => currMatch.ATeamID === team.ID);
  const teamB = teams.find((team) => currMatch.BTeamID === team.ID);

  return (
    <StyledMatchResult>
      <TeamName>{teamA.Name}</TeamName>
      {currMatch.Score.split('-')[0]} &nbsp;&nbsp; - &nbsp;&nbsp;
      {currMatch.Score.split('-')[1]}
      <TeamName>{teamB.Name}</TeamName>
    </StyledMatchResult>
  );
}

export default MatchResult;
