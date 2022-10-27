import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from './FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

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
