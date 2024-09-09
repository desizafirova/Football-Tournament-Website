import styled from 'styled-components';

const TeamFormationsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const FormationContainer = styled.div`
  background: url('/football-field.png');
  background-size: 100%;
  height: 70rem;
  width: 50rem;
  position: relative;
`;

function TeamFormation() {
  return (
    <TeamFormationsContainer>
      <FormationContainer></FormationContainer>
      <FormationContainer></FormationContainer>
    </TeamFormationsContainer>
  );
}

export default TeamFormation;
