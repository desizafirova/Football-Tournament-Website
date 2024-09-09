function findTeamNameById(teams, id) {
  return teams.find((team) => team.ID === id)?.Name;
}

export default findTeamNameById;
