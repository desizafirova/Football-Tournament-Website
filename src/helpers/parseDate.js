function parseDate(dateStr) {
  if (!dateStr) return null;

  const [month, day, year] = dateStr.split('/');
  return new Date(`${year}-${month}-${day}`);
}

export default parseDate;
