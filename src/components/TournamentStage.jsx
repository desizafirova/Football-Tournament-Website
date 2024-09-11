import PropTypes from 'prop-types';
import styled from 'styled-components';
import findTeamNameById from '../helpers/findTeamNameById';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

const StyledTournamentStage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const Heading = styled.h2`
  position: absolute;
  top: 12%;
  font-size: 2rem;
  color: var(--color-stone-400);
`;

const MatchWrapper = styled.div`
  margin-top: 3rem;
  cursor: pointer;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;

const Team = styled.div`
  color: var(--color-stone-300);
  border-left: 2px solid var(--color-stone-300);
  background-color: var(--color-stone-50);
  width: 14rem;
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  font-size: 1.4rem;
  line-height: 3;

  &.winner {
    color: var(--color-blue-500);
    border-color: var(--color-blue-500);
  }
`;

const MatchDate = styled.div`
  color: var(--color-stone-400);
  font-size: 1rem;
`;

function TournamentStage({ matchesInStage, tourStage }) {
  const { teams } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleClick(matchId) {
    navigate(`/match-details/${matchId}`);
  }

  return (
    <StyledTournamentStage>
      <Heading>{tourStage}</Heading>
      {matchesInStage.map((match) => {
        let [scoreOfTeamA, scoreOfTeamB] = match.Score.split('-');
        let scoreOfTeamAWithPenalties = parseInt(scoreOfTeamA, 10);
        let scoreOfTeamBWithPenalties = parseInt(scoreOfTeamB, 10);

        if (scoreOfTeamA.includes('(') || scoreOfTeamB.includes('(')) {
          const [scoreA, penaltyA] = scoreOfTeamA.split('(');
          scoreOfTeamAWithPenalties =
            parseInt(scoreA, 10) + parseInt(penaltyA, 10 || '0', 10);

          const [scoreB, penaltyB] = scoreOfTeamB.split('(');
          scoreOfTeamBWithPenalties =
            parseInt(scoreB, 10) + parseInt(penaltyB, 10 || '0', 10);
        }

        const nameOfTeamA = findTeamNameById(teams, match.ATeamID);
        const nameOfTeamB = findTeamNameById(teams, match.BTeamID);

        const isTeamAWinner =
          scoreOfTeamAWithPenalties > scoreOfTeamBWithPenalties;
        const isTeamBWinner =
          scoreOfTeamBWithPenalties > scoreOfTeamAWithPenalties;
        return (
          <MatchWrapper key={match.ID} onClick={() => handleClick(match.ID)}>
            <Teams>
              <MatchDate>Date: {match.Date}</MatchDate>
              <Team className={isTeamAWinner ? 'winner' : 'loser'}>
                {nameOfTeamA}: &nbsp;<span> {scoreOfTeamA}</span>
              </Team>
              <Team className={isTeamBWinner ? 'winner' : 'loser'}>
                {nameOfTeamB}: &nbsp; <span> {scoreOfTeamB}</span>
              </Team>
            </Teams>
          </MatchWrapper>
        );
      })}
    </StyledTournamentStage>
  );
}

export default TournamentStage;

TournamentStage.propTypes = {
  matchesInStage: PropTypes.arrayOf(PropTypes.object).isRequired,
  tourStage: PropTypes.string.isRequired,
};
