import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Spinner from './Spinner';
import styled from 'styled-components';
import findTeamNameById from '../helpers/findTeamNameById';
import TableRow from './TableRow';
import { useNavigate } from 'react-router-dom';

const StyledMatchesTable = styled.table`
  border: 2px solid var(--color-blue-200);
  background-color: var(--color-blue-50);
  margin: 0 auto;
  border-collapse: collapse;
  width: 50%;
`;

function MatchesTable() {
  const { matches, isLoadingMatches, teams, isLoadingtTeams } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  if (isLoadingMatches || isLoadingtTeams) return <Spinner />;

  function handleClick(matchId) {
    navigate(`/match-details/${matchId}`);
  }

  return (
    <StyledMatchesTable>
      <thead>
        <tr>
          <th colSpan="4">Matches 2024</th>
        </tr>
        <tr>
          <th>Date</th>
          <th>Team A</th>
          <th>Score</th>
          <th>Team B</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <TableRow key={match.ID} onClick={() => handleClick(match.ID)}>
            <td>{match.Date}</td>
            <td>{findTeamNameById(teams, match.ATeamID)}</td>
            <td>{match.Score}</td>
            <td>{findTeamNameById(teams, match.BTeamID)}</td>
          </TableRow>
        ))}
      </tbody>
    </StyledMatchesTable>
  );
}

export default MatchesTable;
