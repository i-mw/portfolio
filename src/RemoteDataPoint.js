import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI';
import SearchResults from './SearchResults.js'
import Search from './Search';
import {Link} from 'react-router-dom'

class RemoteDataPoint extends Component {
  state = {
    remoteCol: []
}

  componentDidMount() {
    this.RetrieveCollection();
  }

  RetrieveCollection = _ => {
    const {searchCollection, searchProperty, searchValue} = this.props;
    dbAPI.getCustomCollection(searchCollection + '-heavy', searchProperty, searchValue)
      .then(col => {
        this.setState({remoteCol: col})
      })
  }

  render() {
    const {
      parentCollection,
      searchCollection
    } = this.props;

    return (
      this.state.remoteCol.length > 0 && (
        <div className="pointSection">
          <h2>{
            parentCollection !== 'skills' ?
              searchCollection
              :
              searchCollection === 'projects' ||
              searchCollection === 'snippets' ?
                'Applied on these ' + searchCollection
                :
                'Learnt from these ' + searchCollection
          }</h2>
          <ul>
            {
            this.state.remoteCol.map(doc => (
              <li key={doc.id} className="wrap-out">
                <Link to={'/' + searchCollection + '/' + doc.id}
                className="wrap-in">{doc.title}</Link>
              </li>
            ))
            }
          </ul>
        </div>
      )
    )
  }
}

RemoteDataPoint.propTypes = {
  parentCollection: propTypes.string.isRequired,
  searchCollection: propTypes.string.isRequired,
  searchProperty: propTypes.string.isRequired,
  searchValue: propTypes.string.isRequired
}

export default RemoteDataPoint;