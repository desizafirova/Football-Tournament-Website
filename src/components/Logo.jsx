import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 8rem;
`;

function Logo() {
  return <StyledLogo src="/logo.svg" alt="Logo" />;
}

export default Logo;
