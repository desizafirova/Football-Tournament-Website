function findMatchInStage(teamID, stageMatches) {
  return stageMatches.find(
    (match) => match.ATeamID === teamID || match.BTeamID === teamID
  );
}

export default findMatchInStage;
