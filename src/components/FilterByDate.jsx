import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const FilterFlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  margin-right: 2rem;

  @media (max-width: 27em) {
    font-size: 1.25rem;
  }
`;

const FilterBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function FilterByDate({ onFilter }) {
  const [fromDate, setFromDate] = useState('2024-06-14');
  const [toDate, setToDate] = useState('2024-07-14');

  useEffect(() => {
    if (fromDate && toDate) {
      onFilter({ fromDate, toDate });
    }
  }, [fromDate, toDate, onFilter]);

  return (
    <FilterFlexContainer>
      <p>Filter by Date |</p>
      <FilterBox>
        <label htmlFor="fromDate">From:</label>
        <input
          id="fromDate"
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          min="2024-06-14"
          max="2024-07-14"
        />
      </FilterBox>
      <FilterBox>
        <label htmlFor="toDate">To:</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          min="2024-06-14"
          max="2024-07-14"
        />
      </FilterBox>
    </FilterFlexContainer>
  );
}

export default FilterByDate;

FilterByDate.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
