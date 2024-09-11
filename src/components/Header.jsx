import styled from 'styled-components';

import Logo from './Logo';
import MainNav from './MainNav';

const StyledHeader = styled.header`
  background-color: var(--color-blue-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
