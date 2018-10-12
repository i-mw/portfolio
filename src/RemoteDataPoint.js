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
        <td>{}:</td>
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