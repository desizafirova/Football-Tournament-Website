import styled from 'styled-components';
import TeamFormation from '../components/TeamFormation';
import MatchResult from '../components/MatchResult';
import MatchStatistics from '../components/MatchStatistics';
import ButtonBack from '../components/ButtonBack';

const StyledMatchDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

function MatchDetails() {
  return (
    <>
      <ButtonBack>&larr; Back</ButtonBack>
      <StyledMatchDetails>
        <MatchResult />
        <TeamFormation />
        <MatchStatistics />
      </StyledMatchDetails>
    </>
  );
}

export default MatchDetails;
