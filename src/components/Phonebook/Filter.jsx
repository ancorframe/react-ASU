import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ valueIn, valueOut }) => {

  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={valueIn}
        onChange={e => valueOut(e.target.value.toLowerCase().trim())}
      />
    </>
  );
};

Filter.propTypes = {
  valueIn: PropTypes.string.isRequired,
  valueOut: PropTypes.func.isRequired
};
