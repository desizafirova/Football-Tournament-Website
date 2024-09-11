import styled from 'styled-components';
import ButtonBack from '../components/ButtonBack';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-stone-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-md);
  border: 2px solid var(--color-stone-300);
  padding: 5rem;

  & p {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
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
