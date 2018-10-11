import React from 'react';
import propTypes from 'prop-types';

function SearchInput(props) {
  const {keywords, searchTerm} = props;

  return (
    <ul className="search-keywords">
      { 
        keywords.map(keyword => (
          <li className="wrap-out" key={keyword}>
            <p className={
              keyword === searchTerm ? "wrap-in active-keyword" : "wrap-in"
              } tabIndex="0">{keyword}</p>
          </li>
        ))
      }
    </ul>
  );
}

SearchInput.propTypes = {
  keywords: propTypes.array.isRequired,
  searchTerm: propTypes.string.isRequired,

}

export default SearchInput;