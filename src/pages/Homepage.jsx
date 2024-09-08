import styled from 'styled-components';
import TournamentBracketsView from '../components/TournamentBracketsView';
import useCSV from '../hooks/useCSV';

const StyledHomepage = styled.main`
  display: flex;
`;

function Homepage() {
  const { isLoading: isLoadingMatches, CSVData: matches } =
    useCSV('/data/matches.csv');
  const { isLoading: isLoadingTeams, CSVData: teams } =
    useCSV('/data/teams.csv');

  if (isLoadingMatches || isLoadingTeams) return <p>Loading...</p>;

  return (
    <StyledHomepage>
      <TournamentBracketsView matches={matches} teams={teams} />
    </StyledHomepage>
  );
}

export default Homepage;
