import { useContext } from 'react';
import TeamDetailsTable from '../components/TeamDetailsTable';
import { GlobalContext } from '../GlobalContext';

function TeamDetails() {
  const isLoadingTeams = useContext(GlobalContext);
  if (isLoadingTeams) return <p>Loading...</p>;

  return (
    <>
      <TeamDetailsTable />
    </>
  );
}

export default TeamDetails;
