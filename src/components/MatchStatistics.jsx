import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './Spinner';

const StyledMatchStatisticsBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  margin: 10rem;
`;

const MatchStatsTable = styled.table`
  background-color: var(--color-blue-50);
  border: 2px solid var(--color-blue-200);
  border-radius: var(--border-radius-md);
  border-collapse: collapse;
`;

function MatchStatistics() {
  const {
    matches,
    isLoadingMatches,
    players,
    isLoadingPlayers,
    teams,
    isLoadingTeams,
    records,
    isLoadingRecords,
  } = useContext(GlobalContext);
  const matchId = useParams();

  if (
    isLoadingMatches ||
    isLoadingTeams ||
    isLoadingPlayers ||
    isLoadingRecords
  )
    return <Spinner />;

  const currMatch = matches.find((match) => match.ID === matchId.id);

  const teamA = teams.find((team) => currMatch.ATeamID === team.ID);
  const teamB = teams.find((team) => currMatch.BTeamID === team.ID);

  const teamAPlayers = players.filter((player) => player.TeamID === teamA.ID);
  const teamBPlayers = players.filter((player) => player.TeamID === teamB.ID);

  const playersPlayedInCurrMatch = records.filter(
    (record) => record.MatchID === matchId.id
  );

  const teamAPlayersIDs = teamAPlayers.map((player) => player.ID);
  const teamBPlayersIDs = teamBPlayers.map((player) => player.ID);

  let playersPlayedInCurrMatchTeamA = playersPlayedInCurrMatch.filter(
    (player) => teamAPlayersIDs.includes(player.PlayerID)
  );
  let playersPlayedInCurrMatchTeamB = playersPlayedInCurrMatch.filter(
    (player) => teamBPlayersIDs.includes(player.PlayerID)
  );

  return (
    <StyledMatchStatisticsBox>
      <MatchStatsTable>
        <thead>
          <tr>
            <th colSpan="3">{teamA.Name}</th>
          </tr>
          <tr>
            <th>&#8470;</th>
            <th>Player</th>
            <th>Position</th>
            <th>Played from</th>
            <th>Played to</th>
          </tr>
        </thead>
        <tbody>
          {playersPlayedInCurrMatchTeamA.map((playerTeamA) => {
            let currPlayer = teamAPlayers.find(
              (player) => player.ID === playerTeamA.PlayerID
            );

            return (
              <tr key={playerTeamA.PlayerID}>
                <td>{currPlayer?.TeamNumber}</td>
                <td>{currPlayer?.FullName}</td>
                <td>{currPlayer?.Position}</td>
                <td>
                  {playerTeamA.fromMinutes}
                  &nbsp; min
                </td>
                <td>
                  {playerTeamA.toMinutes === 'NULL'
                    ? '90'
                    : playerTeamA.toMinutes}
                  &nbsp; min
                </td>
              </tr>
            );
          })}
        </tbody>
      </MatchStatsTable>
      <MatchStatsTable>
        <thead>
          <tr>
            <th colSpan="3">{teamB.Name}</th>
          </tr>
          <tr>
            <th>&#8470;</th>
            <th>Player</th>
            <th>Position</th>
            <th>Played from</th>
            <th>Played to</th>
          </tr>
        </thead>
        <tbody>
          {playersPlayedInCurrMatchTeamB.map((playerTeamB) => {
            let currPlayer = teamBPlayers.find(
              (player) => player.ID === playerTeamB.PlayerID
            );

            return (
              <tr key={playerTeamB.PlayerID}>
                <td>{currPlayer?.TeamNumber}</td>
                <td>{currPlayer?.FullName}</td>
                <td>{currPlayer?.Position}</td>
                <td>
                  {playerTeamB.fromMinutes}
                  &nbsp; min
                </td>
                <td>
                  {playerTeamB.toMinutes === 'NULL'
                    ? '90'
                    : playerTeamB.toMinutes}
                  &nbsp; min
                </td>
              </tr>
            );
          })}
        </tbody>
      </MatchStatsTable>
    </StyledMatchStatisticsBox>
  );
}

export default MatchStatistics;
