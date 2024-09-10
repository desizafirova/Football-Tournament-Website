import styled from 'styled-components';
import TournamentStage from './TournamentStage';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import filterMatchesByDates from '../helpers/filterMatchesByDate';

const StyledTournamentBracketsView = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 10rem;
`;

function TournamentBracketsView() {
  const { matches } = useContext(GlobalContext);

  const stages = {
    roundOf16: filterMatchesByDates('6/29/2024', '7/2/2024', matches),
    quarterFinals: filterMatchesByDates('7/5/2024', '7/6/2024', matches),
    semiFinals: filterMatchesByDates('7/9/2024', '7/10/2024', matches),
    final: filterMatchesByDates('7/14/2024', '7/14/2024', matches),
  };

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
