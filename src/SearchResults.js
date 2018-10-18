import React from 'react';
import propTypes from 'prop-types';
import DocCard from './DocCard'

function SearchResults(props) {
  const {filteredDocs, colType} = props;

  return (
    <ul className="search-results">
    {
      filteredDocs && filteredDocs.map(docData => (
        <DocCard docData={docData} colType={colType} key={docData.id}/>
      ))
    }
    </ul>
  );
}

SearchResults.propTypes = {
  filteredDocs: propTypes.array,
  colType: propTypes.string.isRequired
}

export default SearchResults;