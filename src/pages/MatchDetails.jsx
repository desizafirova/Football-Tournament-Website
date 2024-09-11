import styled from 'styled-components';
import { useEffect } from 'react';

import TeamFormation from '../components/TeamFormation';
import MatchResult from '../components/MatchResult';
import MatchStatistics from '../components/MatchStatistics';
import ButtonBack from '../components/ButtonBack';

const StyledMatchDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

function MatchDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
