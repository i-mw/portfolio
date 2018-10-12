import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI';

class RemoteDataPoint extends Component {
  state = {
    //set initial state
  }

  componentDidMount() {
    //get Data from db
  }

  render() {
    const {
      parentCollection,
      searchCollection,
      searchProperty,
      searchValue
    } = this.props;

    return (
      <tr>
        <td>{
          parentCollection !== 'skills' ?
            searchCollection
            :
            searchCollection === 'projects' ||
            searchCollection === 'snippets' ?
              'Applied on' + searchCollection
              :
              'Learnt from' + searchCollection
        }:</td>
        <td><a></a></td>
      </tr>
    )
  }
}

RemoteDataPoint.propTypes = {
  parentCollection: propTypes.string.isRequired,
  searchCollection: propTypes.string.isRequired,
  searchProperty: propTypes.string.isRequired,
  searchValue: propTypes.string.isRequired,
}

export default RemoteDataPoint;