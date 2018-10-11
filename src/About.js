import {React, Component} from 'react';
import * as dbAPI from './dbAPI.js';

class About extends Component {
  state = {
    // proposed data structure
    // data: { main: {}}
    data: null
  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (About component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    //TODO: get data from database
  }

  render() {
    return('hello')
  }
}

export default About;