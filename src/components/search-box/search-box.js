import React from 'react';
import PropTypes from 'prop-types';

import './search-box.css';

const SearchBox = ({ placeholder, handleChange }) => (
  <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
);

SearchBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchBox;
