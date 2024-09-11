import styled from 'styled-components';
import filterMatchesByDates from '../helpers/filterMatchesByDate';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Spinner from './Spinner';
import findTeamNameById from '../helpers/findTeamNameById';
import TableRow from './TableRow';

const StyledGroupStageTable = styled.table`
  border-collapse: collapse;
  background-color: var(--color-blue-50);
  border: 1px solid var(--color-blue-200);
  margin: 7rem auto;
`;

function GroupStageTable() {
  const { matches, isLoadingMatches, teams, isLoadingTeams } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  if (isLoadingMatches || isLoadingTeams) return <Spinner />;
  const groupStage = filterMatchesByDates('6/14/2024', '6/26/2024', matches);
  console.log(groupStage);

  function handleClick(matchId) {
    navigate(`/match-details/${matchId}`);
  }

  return (
    <StyledGroupStageTable>
      <thead>
        <tr>
          <th colSpan="4">Group Stage Matches</th>
        </tr>
        <tr>
          <th>Date</th>
          <th>Team</th>
          <th>Score</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {groupStage.map((match) => {
          return (
            <TableRow key={match.ID} onClick={() => handleClick(match.ID)}>
              <td>{match.Date}</td>
              <td>{findTeamNameById(teams, match.ATeamID)}</td>
              <td>{match.Score}</td>
              <td>{findTeamNameById(teams, match.BTeamID)}</td>
            </TableRow>
          );
        })}
      </tbody>
    </StyledGroupStageTable>
  );
}

export default GroupStageTable;
