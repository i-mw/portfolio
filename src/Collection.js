import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import Search from './Search'
import NetworkError from './NetworkError'

class Collection extends Component {
  state = {
    main: null,
    list: null
  }

  retrieveData = _ => {
    dbAPI.getDoc(this.props.colType + '-light', 'main')
      .then(data => {
        this.props.setIsExternalLoading(false);
        this.props.setIsOnline(true);
        this.setState({main: data});
        this.props.setIsInternalLoading(true);
      })
      .then(_ => dbAPI.getCollection(this.props.colType + '-light'))
      .then(data => {
          this.props.setIsInternalLoading(false);
          this.props.setIsOnline(true);
        this.setState({list: data});
      })
      .catch(error => {
        if (error.message.indexOf('offline') > -1) {
          this.props.setIsOnline(false);
        }
      })  
  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (Collection component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    this.props.setIsExternalLoading(true);
    this.retrieveData()
  }

  render() {
    const {main, list} = this.state;

    return(
      this.state.main ? (
        <section>
          <Header type='collection' headline={main.headline}
            headlinePoints={main.headlinePoints}/>
          <Search colType={this.props.colType} keywords={main.keywords}
            retrievedDocs={list} location={this.props.location}
            isInternalLoading={this.props.isInternalLoading}
            isOnline={this.props.isOnline}/>
        </section>
      ) : 
      (!this.props.isOnline && (
        <section>
          <NetworkError placement="network-error-inline"/>
        </section>
        )
      )
    );
  }
}

Collection.propTypes = {
  colType: propTypes.string.isRequired,
  setIsExternalLoading: propTypes.func.isRequired,
  setIsInternalLoading: propTypes.func.isRequired,
  isInternalLoading: propTypes.bool.isRequired,
  setIsOnline: propTypes.func.isRequired,
  isOnline: propTypes.bool.isRequired
}

export default Collection;