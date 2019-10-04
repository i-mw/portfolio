import React from 'react';
import propTypes from 'prop-types';

function SearchInput(props) {
  const {colType, searchTerm, changeSearchTerm} = props;

  return (
    <div className="search wrap-out">
      <div className="wrap-in">
        <input placeholder={"search my " + colType} type="text" name="search"
          value={searchTerm} onChange={event => changeSearchTerm(event.target.value)}
          onKeyDown={event => event.keyCode === 13 && (changeSearchTerm(event.target.value))} 
        />
        <button className="search-btn" onClick={
          event => changeSearchTerm(document.querySelector('.search input').value)}>
            Search
        </button>
        { (searchTerm !== "") &&      
          (<button className="cancel-btn" type="button"
            onClick={event => changeSearchTerm("")}>
            <svg focusable="false" height="22px" viewBox="0 0 24 24" width="22px"
              xmlns="http://www.w3.org/2000/svg">
              <path fill="rgb(67, 84, 114)" 
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
              </path>
              <path d="M0 0h24v24H0z" fill="none">
              </path>
            </svg>
          </button>)
        }
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