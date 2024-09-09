import styled from 'styled-components';
import TournamentBracketsView from '../components/TournamentBracketsView';
import Winner from '../components/Winner';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const StyledHomepage = styled.main`
  display: flex;
  justify-content: space-around;
`;

function Homepage() {
  const { isLoadingMatches, isLoadingTeams } = useContext(GlobalContext);

  if (isLoadingMatches || isLoadingTeams) return <p>Loading...</p>;

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
