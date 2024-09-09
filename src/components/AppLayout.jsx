import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const StyledLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
