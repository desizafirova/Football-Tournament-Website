import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 27em) {
    font-size: 1.3rem;
  }
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
        <StyledNavLink to="all-matches">&rarr; All Matches</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="group-stage-matches">
          &rarr; Group Stage
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="team-details">&rarr; Teams</StyledNavLink>
      </li>
    </StyledMainNav>
  );
}

export default MainNav;
