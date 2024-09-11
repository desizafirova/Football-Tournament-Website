import { isValid, parse } from 'date-fns';

function parseDate(dateStr) {
  if (!dateStr) return null;

  const formats = ['MM/dd/yyyy', 'yyyy-MM-dd', 'M/d/yyyy'];

  for (const format of formats) {
    const parsedDate = parse(dateStr, format, new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }
  }

  return null;
}

export default parseDate;
