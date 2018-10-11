import React from 'react';
import propTypes from 'prop-types';

function SearchInput(props) {
  const {colType, searchTerm} = props;

  return (
    <div className="search wrap-out">
      <div className="wrap-in">
        <input placeholder={"search my " + colType} type="text" name="search"
          defaultValue={searchTerm}
        />
        <button>Search</button>
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  colType: propTypes.string.isRequired,
  searchTerm: propTypes.string.isRequired,
}

export default SearchInput;