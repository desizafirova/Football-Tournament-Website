import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../GlobalContext';

const StyledTeamDetailsTable = styled.table`
  padding: 1rem;
  border: 2px solid var(--color-blue-200);
  border-radius: var(--border-radius-md);
`;

function TeamDetailsTable() {
  const { players, teams } = useContext(GlobalContext);
  return (
    <StyledTeamDetailsTable>
      <thead>
        <tr>
          <th>Number</th>
          <th>Player</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => {
          const team = teams.find((team) => team.ID === player.TeamID);

          return team ? (
            <tr key={player.ID}>
              <td>{player.TeamNumber}</td>
              <td>{player.FullName}</td>
              <td>{player.Position}</td>
            </tr>
          ) : null;
        })}
      </tbody>
    </StyledTeamDetailsTable>
  );
}

export default TeamDetailsTable;
