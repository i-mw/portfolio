import React from 'react';
import propTypes from 'prop-types';

function SearchInput(props) {
  const {keywords} = props;

  return (
    <ul className="search-keywords">
      { 
        keywords.map(keyword => (
          <li className="wrap-out" key={keyword}>
            <p className="wrap-in" tabIndex="0">{keyword}</p>
          </li>
        ))
      }
    </ul>
  );
}

SearchInput.propTypes = {
  keywords: propTypes.array.isRequired
}

export default SearchInput;