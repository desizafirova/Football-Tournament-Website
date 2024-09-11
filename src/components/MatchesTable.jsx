import styled from 'styled-components';
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

import findTeamNameById from '../helpers/findTeamNameById';
import parseDate from '../helpers/parseDate';
import Spinner from './Spinner';
import TableRow from './TableRow';
import FilterByDate from './FilterByDate';

const StyledMatchesTable = styled.table`
  border: 2px solid var(--color-blue-200);
  background-color: var(--color-blue-50);
  margin: 0 auto;
  border-collapse: collapse;
  width: 50%;
`;

const Textbox = styled.p`
  margin-bottom: 5rem;
  margin-right: 2rem;
  margin-top: 1rem;
  text-align: right;
  font-style: italic;
  color: var(--color-stone-400);
`;

function MatchesTable() {
  const { matches, isLoadingMatches, teams, isLoadingtTeams } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const [dateRange, setDateRange] = useState({
    fromDate: '2024-06-14',
    toDate: '2024-07-14',
  });

  const filteredMatches = matches.filter((match) => {
    const matchDate = parseDate(match.Date);
    const fromDate = parseDate(dateRange.fromDate);
    const toDate = parseDate(dateRange.toDate);

    if (!fromDate && !toDate) return true;
    if (!fromDate) return matchDate <= toDate;
    if (!toDate) return matchDate >= fromDate;

    return matchDate && matchDate >= fromDate && matchDate <= toDate;
  });

  if (isLoadingMatches || isLoadingtTeams) return <Spinner />;

  function handleClick(matchId) {
    navigate(`/match-details/${matchId}`);
  }

  return (
    <>
      <FilterByDate onFilter={setDateRange} />
      <Textbox>Choose only from 06/14/2024 to 07/14/2024</Textbox>
      <StyledMatchesTable>
        <thead>
          <tr>
            <th colSpan="4">Matches 2024</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Team A</th>
            <th>Score</th>
            <th>Team B</th>
          </tr>
        </thead>
        <tbody>
          {filteredMatches.map((match) => (
            <TableRow key={match.ID} onClick={() => handleClick(match.ID)}>
              <td>{match.Date}</td>
              <td>{findTeamNameById(teams, match.ATeamID)}</td>
              <td>{match.Score}</td>
              <td>{findTeamNameById(teams, match.BTeamID)}</td>
            </TableRow>
          ))}
        </tbody>
      </StyledMatchesTable>
    </>
  );
}

export default MatchesTable;
