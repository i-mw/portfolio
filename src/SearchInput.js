import React from 'react';
import propTypes from 'prop-types';

function SearchInput(props) {
  const {colType, searchTerm, changeSearchTerm} = props;

  return (
    <div className="search wrap-out">
      <div className="wrap-in">
        <input placeholder={"search my " + colType} type="text" name="search"
          defaultValue={searchTerm} onChange={event => changeSearchTerm(event.target)}
          onKeyDown={event => event.keyCode === 13 && (changeSearchTerm(event.target))} 
        />
        <button onClick={
          event => changeSearchTerm(document.querySelector('.search input'))
        }>Search</button>
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  colType: propTypes.string.isRequired,
  searchTerm: propTypes.string.isRequired,
  changeSearchTerm: propTypes.func.isRequired
}

export default SearchInput;