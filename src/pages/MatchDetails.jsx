import styled from 'styled-components';
import TeamFormation from '../components/TeamFormation';
import MatchResult from '../components/MatchResult';
import MatchStatistics from '../components/MatchStatistics';

const StyledMatchDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

function MatchDetails() {
  return (
    <StyledMatchDetails>
      <MatchResult />
      <TeamFormation />
      <MatchStatistics />
    </StyledMatchDetails>
  );
}

export default MatchDetails;
