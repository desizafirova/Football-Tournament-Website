import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 5.5rem;
  margin: 1rem;
  cursor: pointer;
`;

function Logo() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    if (location.pathname === '/homepage') return;
    navigate('/');
  }

  return <StyledLogo src="/logo.svg" alt="Logo" onClick={handleClick} />;
}

export default Logo;
