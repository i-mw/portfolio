import React, {Component} from 'react';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import Search from './Search';

class Collection extends Component {
  state = {
    data: {
      main: null,
      list: null
    }
  }

  retrieveData = _ => {
    /* TODO: retrieve data here */
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
    const {data} = this.state;

    return(
      this.state.data.main && (
        <section>
        </section>
      )
    );
  }
}

export default Collection;