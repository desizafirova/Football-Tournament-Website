import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  background-color: var(--color-blue-700);
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export default Header;
