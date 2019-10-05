import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI';
import {Link} from 'react-router-dom'

class RemoteDataPoint extends Component {
  state = {
    remoteCol: []
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.setIsInternalLoading(true);
    this.RetrieveCollection();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  RetrieveCollection = _ => {
    const {searchCollection, searchProperty, searchValue} = this.props;
    if (this._isMounted) {
      dbAPI.getCustomCollection(searchCollection + '-heavy', searchProperty, searchValue)
        .then(col => {
          this.props.setIsInternalLoading(false);
          this.props.setIsOnline(true);
          if (this._isMounted) {
            this.setState({remoteCol: col})
          }
        })
        .catch(error => {
          if (error.message.indexOf('offline') > -1) {
            this.props.setIsOnline(false);
          }
        })
    }
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
              searchCollection.charAt(0).toUpperCase() +
              searchCollection.split('').slice(1, searchCollection.length).join("")
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
  searchValue: propTypes.string.isRequired,
  setIsInternalLoading: propTypes.func.isRequired,
  setIsOnline: propTypes.func.isRequired
}

export default RemoteDataPoint;