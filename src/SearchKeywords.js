import React from 'react';
import propTypes from 'prop-types';

function SearchInput(props) {
  const {
    keywords,
    searchTerm,
    changeSearchTerm
  } = props;

  return (
    (keywords && keywords.length > 0) && (
      <ul className="search-keywords">
        { 
          keywords.map(keyword => (
            <li className="wrap-out" key={keyword}>
              <p tabIndex="0" className = {
                  keyword === searchTerm ? "wrap-in active-keyword" : "wrap-in"}
                  onClick={event => changeSearchTerm(keyword)}>
              {keyword}
              </p>
            </li>
          ))
        }
      </ul>
    )
  );
}

SearchInput.propTypes = {
  keywords: propTypes.array.isRequired,
  searchTerm: propTypes.string.isRequired,
  changeSearchTerm: propTypes.func.isRequired
}

export default SearchInput;