import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from 'Redux/FilterSlice';
import { useFilter } from 'Redux/Selectors';



export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useFilter();

  const onChange = e => {
    const value = e.target.value.toLowerCase().trim();
    dispatch(update(value));
  };

  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
};
