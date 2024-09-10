import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalContext } from '../GlobalContext';
import Spinner from './Spinner';

const StyledTeamDetailsTable = styled.table`
  border: 2px solid var(--color-blue-200);
  background-color: var(--color-blue-50);
  margin: 0 auto;
  border-collapse: collapse;
`;

function TeamDetailsTable({ teamId }) {
  const { players, isLoadingPlayers } = useContext(GlobalContext);

  if (isLoadingPlayers) return <Spinner />;

  const currTeamPlayers = players.filter(
    (player) => Number(player.TeamID) === teamId
  );

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
        {currTeamPlayers.map((player) => {
          return (
            <tr key={player.ID}>
              <td>{player.TeamNumber}</td>
              <td>{player.FullName}</td>
              <td>{player.Position}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTeamDetailsTable>
  );
}

export default TeamDetailsTable;

TeamDetailsTable.propTypes = {
  teamId: PropTypes.number.isRequired,
};
