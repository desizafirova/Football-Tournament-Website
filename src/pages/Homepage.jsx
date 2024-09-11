import styled from 'styled-components';
import { useContext } from 'react';

import { GlobalContext } from '../GlobalContext';
import TournamentBracketsView from '../components/TournamentBracketsView';
import Winner from '../components/Winner';
import Spinner from '../components/Spinner';

const StyledHomepage = styled.main`
  display: flex;
  justify-content: space-around;

  @media (max-width: 81em) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

function Homepage() {
  const { isLoadingMatches, isLoadingTeams } = useContext(GlobalContext);

  if (isLoadingMatches || isLoadingTeams) return <Spinner />;

  return (
    <>
      <StyledHomepage>
        <TournamentBracketsView />
        <Winner />
      </StyledHomepage>
    </>
  );
}

export default Homepage;
