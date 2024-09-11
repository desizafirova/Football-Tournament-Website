import styled from 'styled-components';
import ButtonBack from '../components/ButtonBack';

const StyledPageNotFound = styled.div`
  margin: 50% 0;
  text-align: center;
  font-size: 2rem;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <p>Page not found. 🤔</p>
      <ButtonBack>&larr; Go Back</ButtonBack>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
