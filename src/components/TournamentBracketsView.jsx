import styled from 'styled-components';
import TournamentStage from './TournamentStage';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const StyledTournamentBracketsView = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 10rem;
`;

function TournamentBracketsView() {
  const { matches } = useContext(GlobalContext);
  const stages = {
    roundOf16: matches.slice(36, 44),
    quarterFinals: matches.slice(44, 48),
    semiFinals: matches.slice(48, 50),
    final: matches.slice(50, 51),
  };

  console.log(stages.roundOf16, stages.quarterFinals);

  return (
    <StyledTournamentBracketsView>
      <TournamentStage
        matchesInStage={stages.roundOf16}
        tourStage="ROUND OF 16"
      />
      <TournamentStage
        matchesInStage={stages.quarterFinals}
        tourStage="QUARTER-FINALS"
      />
      <TournamentStage
        matchesInStage={stages.semiFinals}
        tourStage="SEMI-FINALS"
      />
      <TournamentStage matchesInStage={stages.final} tourStage="FINAL" />
    </StyledTournamentBracketsView>
  );
}

export default TournamentBracketsView;
