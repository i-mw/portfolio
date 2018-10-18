import React, {Component} from 'react';
import propTypes from 'prop-types';
import SearchInput from './SearchInput'
import SearchKeywords from './SearchKeywords'
import SearchResults from './SearchResults'

class Search extends Component {
  render() {
    const {colType, keywords} = this.props;

    return (
      <div className="container" tabIndex="-1">
        <SearchInput
          colType={colType}
          searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}
        />
        <SearchKeywords
          keywords={keywords}
          searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}
        />
        <SearchResults
          filteredDocs={filteredDocs}
          colType={colType}
        />
      </div>
    );  
  }
}

Search.propTypes = {
  colType: propTypes.string.isRequired,
  keywords: propTypes.array.isRequired
}

export default Search;