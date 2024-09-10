import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButtonBack = styled.button`
  padding: 1rem 2rem;
  background-color: var(--color-stone-500);
  color: var(--color-stone-100);
  border: none;
`;

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <StyledButtonBack
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </StyledButtonBack>
  );
}

export default ButtonBack;
