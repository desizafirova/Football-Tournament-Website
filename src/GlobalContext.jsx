import { createContext } from 'react';
import useCSV from './hooks/useCSV';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const { isLoading: isLoadingMatches, CSVData: matches } =
    useCSV('/data/matches.csv');
  const { isLoading: isLoadingTeams, CSVData: teams } =
    useCSV('/data/teams.csv');
  const { isLoading: isLoadingPlayers, CSVData: players } =
    useCSV('/data/players.csv');

  return (
    <GlobalContext.Provider
      value={{
        matches,
        teams,
        players,
        isLoadingMatches,
        isLoadingTeams,
        isLoadingPlayers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
