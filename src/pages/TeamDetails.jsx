import { useContext } from 'react';
import TeamDetailsTable from '../components/TeamDetailsTable';
import { GlobalContext } from '../GlobalContext';
import ButtonBack from '../components/ButtonBack';

function TeamDetails() {
  const isLoadingTeams = useContext(GlobalContext);
  if (isLoadingTeams) return <p>Loading...</p>;

  return (
    <>
      <ButtonBack />
      <TeamDetailsTable />
    </>
  );
}

export default TeamDetails;
