import parseDate from './parseDate';

function filterMatchesByDates(fromDateInput, toDateInput, matches) {
  const startDate = parseDate(fromDateInput);
  const endDate = parseDate(toDateInput);
  return matches.filter((match) => {
    const matchDate = parseDate(match.Date);
    return matchDate >= startDate && matchDate <= endDate;
  });
}

export default filterMatchesByDates;
