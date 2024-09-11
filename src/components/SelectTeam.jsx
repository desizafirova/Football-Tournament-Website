import { useContext, useState } from 'react';

import { GlobalContext } from '../GlobalContext';
import Spinner from './Spinner';
import TeamDetailsTable from './TeamDetailsTable';
import styled from 'styled-components';

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const Select = styled.select`
  width: 25%;
  height: 4rem;
  border-radius: var(--border-radius-sm);
`;

function SelectTeam() {
  const { teams, isLoadingTeams } = useContext(GlobalContext);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  if (isLoadingTeams) return <Spinner />;

  function handleSelect(e) {
    setSelectedTeamId(Number(e.target.value));
  }

  return (
    <>
      <SelectDiv>
        <label htmlFor="teams">Choose a team &darr;</label>

        <Select name="teams" id="teams" onChange={handleSelect}>
          <option value="">Select a team</option>
          {teams.map((team) => (
            <option value={team.ID} key={team.ID}>
              {team.Name}
            </option>
          ))}
        </Select>
      </SelectDiv>
      {selectedTeamId && <TeamDetailsTable teamId={selectedTeamId} />}
    </>
  );
}

export default SelectTeam;
