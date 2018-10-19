import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import Search from './Search'

class Collection extends Component {
  state = {
    main: null,
    list: null
  }

  retrieveData = _ => {
    /* TODO: retrieve data here */
    dbAPI.getDoc(this.props.colType + '-light', 'main')
      .then(data => {
        this.setState({main: data});
      })
      .then(_ => dbAPI.getCollection(this.props.colType + '-light'))
      .then(data => {
        this.setState({list: data});
      })
  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (Collection component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    this.retrieveData()
  }

  render() {
    const {main, list} = this.state;

    return(
      this.state.main && (
        <section>
          <Header type='collection' headline={main.headline}
            headlinePoints={main.headlinePoints}/>
          <Search colType={this.props.colType} keywords={main.keywords}
            retrievedDocs={list}/>
        </section>
      )
    );
  }
}

Collection.propTypes = {
  colType: propTypes.string.isRequired
}

export default Collection;