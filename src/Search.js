import React, {Component} from 'react';
import propTypes from 'prop-types';
import SearchInput from './SearchInput'
import SearchKeywords from './SearchKeywords'
import SearchResults from './SearchResults'
import InternalLoading from './InternalLoading'
import NetworkError from './NetworkError'

class Search extends Component {
  state = {
    searchTerm: '',
  }
  
  componentDidMount() {
    let searchInUrl = this.props.location.search
      .replace('?', '').replace(/%20/gi, ' ').replace(/\+/gi, ' ');

    this.setState({searchTerm: searchInUrl});
  }

  changeSearchTerm = searchTerm => {
    let searchInUrl = searchTerm.replace(/ /gi, '+');
    searchTerm !== '' ? 
      window.history.pushState('', '', '?' + searchInUrl)
      :
      window.history.pushState('', '', './' + this.props.colType);

    this.setState({searchTerm});
  }
  
  render() {
    const {colType, keywords, isInternalLoading, isOnline} = this.props;
    const {searchTerm} = this.state;

    let filteredDocs = this.props.retrievedDocs ?
      this.props.retrievedDocs.filter(doc => {
        return doc.keywords.find(keyword => {
          return keyword.indexOf(searchTerm) > -1
        })
      })
    : null;

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
          {(isInternalLoading && isOnline ) && <InternalLoading/>}
          {!isOnline && <NetworkError placement="network-error-inline"/>}
          {this.props.retrievedDocs && (
            <SearchResults
              filteredDocs={filteredDocs || this.props.retrievedDocs}
              colType={colType}
          />)}
        </div>
      </main>
    );  
  }
}

Search.propTypes = {
  colType: propTypes.string.isRequired,
  keywords: propTypes.array.isRequired,
  retrievedDocs: propTypes.array,
  location: propTypes.object.isRequired,
  isInternalLoading: propTypes.bool.isRequired,
  isOnline: propTypes.bool.isRequired
}

export default Search;