import styled from 'styled-components';
import TeamFormation from '../components/TeamFormation';

const StyledMatchDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

function MatchDetails() {
  return (
    <StyledMatchDetails>
      <TeamFormation />
    </StyledMatchDetails>
  );
}

export default MatchDetails;
