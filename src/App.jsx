import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalContextProvider } from './GlobalContext';
import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './components/AppLayout';
import Homepage from './pages/Homepage';
import MatchDetails from './pages/MatchDetails';
import TeamDetails from './pages/TeamDetails';
import GroupStage from './pages/GroupStage';
import AllMatches from './pages/AllMatches';

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/homepage" />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/match-details/:id" element={<MatchDetails />} />
              <Route path="team-details" element={<TeamDetails />} />
              <Route path="/group-stage-matches" element={<GroupStage />} />
              <Route path="/all-matches" element={<AllMatches />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
