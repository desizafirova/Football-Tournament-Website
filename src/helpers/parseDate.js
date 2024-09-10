function parseDate(dateStr) {
  const [month, day, year] = dateStr.split('/');
  return new Date(`${year}-${month}-${day}`);
}

export default parseDate;
