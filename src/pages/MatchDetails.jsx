import styled from 'styled-components';
import TeamFormation from '../components/TeamFormation';
import MatchResult from '../components/MatchResult';

const StyledMatchDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

function MatchDetails() {
  return (
    <StyledMatchDetails>
      <MatchResult />
      <TeamFormation />
    </StyledMatchDetails>
  );
}

export default MatchDetails;
