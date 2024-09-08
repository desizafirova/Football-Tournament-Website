function parseCSV(csvData) {
  const rows = csvData.split('\r\n');
  const columnHeaders = rows[0].split(',');

  return rows.slice(1).map((row) => {
    const values = row.split(',');

    return columnHeaders.reduce((accObj, column, i) => {
      accObj[column] = values[i];
      return accObj;
    }, {});
  });
}

export default parseCSV;
