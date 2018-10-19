import React, {Component} from 'react';
import propTypes from 'prop-types';
import SearchInput from './SearchInput'
import SearchKeywords from './SearchKeywords'
import SearchResults from './SearchResults'

class Search extends Component {
  state = {
    searchTerm: '',
    filteredDocs: null
  }
  
  changeSearchTerm = searchTerm => {
    let filteredDocs = this.props.retrievedDocs.filter(doc => {
      return doc.keywords.find(keyword => {
        return keyword.indexOf(searchTerm) > -1
      })
    });
    this.setState({searchTerm, filteredDocs});
  }
  
  render() {
    const {colType, keywords} = this.props;
    const {searchTerm, filteredDocs} = this.state;

    return (
      <main className={colType === 'skills' ? 'collection skills' : 'collection'}>
        <div className="container" tabIndex="-1">
          <SearchInput
            colType={colType}
            searchTerm={searchTerm}
            changeSearchTerm={this.changeSearchTerm}
          />
          <SearchKeywords
            keywords={keywords}
            searchTerm={searchTerm}
            changeSearchTerm={this.changeSearchTerm}
          />
          <SearchResults
            filteredDocs={filteredDocs || this.props.retrievedDocs}
            colType={colType}
          />
        </div>
      </main>
    );  
  }
}

Search.propTypes = {
  colType: propTypes.string.isRequired,
  keywords: propTypes.array.isRequired,
  retrievedDocs: propTypes.array
}

export default Search;