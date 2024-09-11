import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonBack = styled.button`
  padding: 1rem 2rem;
  background-color: var(--color-stone-600);
  color: var(--color-stone-100);
  border: none;
  margin: 1rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  &:hover {
    background-color: var(--color-stone-700);
  }

  &:active {
    box-shadow: var(--shadow-sm);
  }
`;

function ButtonBack({ children }) {
  const navigate = useNavigate();
  return (
    <StyledButtonBack
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </StyledButtonBack>
  );
}

export default ButtonBack;

ButtonBack.propTypes = {
  children: PropTypes.node.isRequired,
};
