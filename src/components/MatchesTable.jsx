import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Spinner from './Spinner';

function MatchesTable() {
  const { matches, isLoadingMatches } = useContext(GlobalContext);
  console.log(matches);
  if (isLoadingMatches) return <Spinner />;
  return <div></div>;
}

export default MatchesTable;
