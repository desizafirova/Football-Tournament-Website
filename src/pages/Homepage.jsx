import styled from 'styled-components';
import TournamentBracketsView from '../components/TournamentBracketsView';
import useCSV from '../hooks/useCSV';

const StyledHomepage = styled.main`
  display: flex;
`;

function Homepage() {
  const matches = useCSV('../data/matches.csv');
  const teams = useCSV('../data/teams.csv');
  console.log(matches, teams);

  return (
    <StyledHomepage>
      <TournamentBracketsView matches={matches} teams={teams} />
    </StyledHomepage>
  );
}

export default Homepage;
