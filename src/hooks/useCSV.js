import { useEffect, useState } from 'react';
import parseCSV from '../helpers/parseCSV';

function useCSV(urlCSV) {
  const [CSVData, setCSVData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchAndParseCSVData() {
        try {
          setIsLoading(true);
          const res = await fetch(urlCSV);

          if (!res.ok)
            throw new Error('Something went wrong with network response');

          const textCSV = await res.text();
          const parsedCSVData = parseCSV(textCSV);
          setCSVData(parsedCSVData);
        } catch (err) {
          console.error('Error:', err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchAndParseCSVData();
    },
    [urlCSV]
  );

  return { CSVData, isLoading, error };
}

export default useCSV;
