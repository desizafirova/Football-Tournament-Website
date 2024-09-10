import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from '../GlobalContext';
import positionsOnTheField from './constants/positionsOnTheField';
import Spinner from './Spinner';

const TeamFormationsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const FormationContainer = styled.div`
  background: url('/football-field.png');
  background-size: 100%;
  height: 70rem;
  width: 50rem;
  position: relative;
`;

const PositionMarker = styled.div`
  position: absolute;
  top: ${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
  transform: translate(-50%, -50%);
  background-color: #c02f2f;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  text-align: center;
  color: var(--color-stone-600);
`;

const PlayerNumber = styled.div`
  font-size: 1rem;
  color: black;
  z-index: 1000;
`;
function TeamFormation() {
  const { matches, isLoadingMatches, players, isLoadingPlayers } =
    useContext(GlobalContext);
  const matchId = useParams();

  if (isLoadingMatches || isLoadingPlayers) return <Spinner />;

  const currMatch = matches.find((match) => match.ID === matchId.id);

  const idOfATeam = currMatch.ATeamID;
  const idOfBTeam = currMatch.BTeamID;

  const teamAPlayers = players.filter((player) => player.TeamID === idOfATeam);
  const teamBPlayers = players.filter((player) => player.TeamID === idOfBTeam);

  const startingPlayersFromTeamA = teamAPlayers.slice(0, 11);
  const startingPlayersFromTeamB = teamBPlayers.slice(0, 11);

  function generateTeamFormation(players) {
    const positionCount = {
      DF: 0,
      MF: 0,
      FW: 0,
    };

    return players.map((player) => {
      const position = positionsOnTheField[player.Position];

      if (Array.isArray(position)) {
        let playerPosition;
        if (player.Position === 'DF') {
          playerPosition = position[positionCount.DF % position.length];
          positionCount.DF++;
        } else if (player.Position === 'MF') {
          playerPosition = position[positionCount.MF % position.length];
          positionCount.MF++;
        } else if (player.Position === 'FW') {
          playerPosition = position[positionCount.FW % position.length];
          positionCount.FW++;
        }

        return (
          <PositionMarker
            $top={playerPosition.x}
            $left={playerPosition.y}
            key={player.ID}
          >
            <PlayerNumber>{player.TeamNumber}</PlayerNumber>
          </PositionMarker>
        );
      }

      if (position) {
        return (
          <PositionMarker $top={position.x} $left={position.y} key={player.ID}>
            <PlayerNumber>{player.TeamNumber}</PlayerNumber>
          </PositionMarker>
        );
      }

      return null;
    });
  }

  return (
    <TeamFormationsContainer>
      <FormationContainer>
        {generateTeamFormation(startingPlayersFromTeamA)}
      </FormationContainer>
      <FormationContainer>
        {generateTeamFormation(startingPlayersFromTeamB)}
      </FormationContainer>
    </TeamFormationsContainer>
  );
}

export default TeamFormation;
