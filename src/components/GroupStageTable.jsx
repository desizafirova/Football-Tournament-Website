import styled from 'styled-components';
import filterMatchesByDates from '../helpers/filterMatchesByDate';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Spinner from './Spinner';

const StyledGroupStageTable = styled.table`
  border-collapse: collapse;
  background-color: var(--var-blue-50);
`;

function GroupStageTable() {
  const { matches, isLoadingMatches } = useContext(GlobalContext);

  if (isLoadingMatches) return <Spinner />;
  const groupStage = filterMatchesByDates('6/14/2024', '6/26/2024', matches);
  console.log(groupStage);
  return <StyledGroupStageTable></StyledGroupStageTable>;
}

export default GroupStageTable;
