import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-blue-200);
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-blue-50);
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <li>
        <StyledNavLink to="/team-details">
          Learn more about the teams
        </StyledNavLink>
      </li>
    </StyledMainNav>
  );
}

export default MainNav;
