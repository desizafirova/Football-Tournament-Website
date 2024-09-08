import PropTypes from 'prop-types';
import styled from 'styled-components';
import TournamentStage from './TournamentStage';

const StyledTournamentBracketsView = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 10rem;
`;

function TournamentBracketsView({ matches, teams }) {
  const stages = {
    roundOf16: matches.slice(36, 44),
    quarterFinals: matches.slice(44, 48),
    semiFinals: matches.slice(48, 50),
    final: matches.slice(50, 51),
  };

  return (
    <StyledTournamentBracketsView>
      <TournamentStage
        matches={stages.roundOf16}
        teams={teams}
        tourStage="ROUND OF 16"
      />
      <TournamentStage
        matches={stages.quarterFinals}
        teams={teams}
        tourStage="QUARTER-FINALS"
      />
      <TournamentStage
        matches={stages.semiFinals}
        teams={teams}
        tourStage="SEMI-FINALS"
      />
      <TournamentStage matches={stages.final} teams={teams} tourStage="FINAL" />
    </StyledTournamentBracketsView>
  );
}

export default TournamentBracketsView;

TournamentBracketsView.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
