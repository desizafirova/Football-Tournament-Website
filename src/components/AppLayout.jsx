import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
