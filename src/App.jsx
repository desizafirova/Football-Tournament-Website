import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './components/AppLayout';
import Homepage from './pages/Homepage';
import MatchDetails from './pages/MatchDetails';
import TeamDetails from './pages/TeamDetails';
import { GlobalContextProvider } from './GlobalContext';

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
              <Route path="team-details/:id" element={<TeamDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
