import React from 'react';
import propTypes from 'prop-types';
import DocCard from './DocCard'

function SearchResults(props) {
  const {filteredDocs, parentCol} = props;

  return (
    <ul className="search-results">
    {
      filteredDocs.map(docData => (
        <DocCard docData={docData} parentCol={parentCol} key={docData.id}/>
      ))
    }
    </ul>
  );
}

SearchResults.propTypes = {
  filteredDocs: propTypes.array.isRequired,
  parentCol: propTypes.string.isRequired
}

export default SearchResults;