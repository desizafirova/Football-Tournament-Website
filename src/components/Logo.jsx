import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 5.5rem;
  margin: 1rem;
`;

function Logo() {
  return <StyledLogo src="/logo.svg" alt="Logo" />;
}

export default Logo;
