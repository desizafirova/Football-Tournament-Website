import styled from 'styled-components';
import ButtonBack from '../components/ButtonBack';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-stone-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: #fff;
  border-radius: var(--border-radius-md);
  border: 2px solid var(--color-stone-300);
  width: 35%;
  height: 30%;

  & p {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 60%;
    height: 20%;
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Box>
        <p>Page not found. 🤔</p>
        <ButtonBack>&larr; Go Back</ButtonBack>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
