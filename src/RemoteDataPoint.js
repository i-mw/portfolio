import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI';

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
        <tr>
          <td>{
            parentCollection !== 'skills' ?
              searchCollection
              :
              searchCollection === 'projects' ||
              searchCollection === 'snippets' ?
                'Applied on ' + searchCollection
                :
                'Learnt from ' + searchCollection
          }:</td>
          {
            this.state.remoteCol.map(doc => (
              <td key={doc.id}><a href={'./' + searchCollection + '/' + doc.id}>{doc.title}</a></td>
            ))
          }
        </tr>
      )
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