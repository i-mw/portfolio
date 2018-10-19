import React, {Component} from 'react';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import AboutDetails from './AboutDetails';

class About extends Component {
  state = {
    data: {
      main: null
    }
  }

  retrieveData = _ => {
    dbAPI.getDoc('about', 'main').then(data => {
      this.setState({data: {main: data}});
    })
  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (About component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    this.retrieveData()
  }

  render() {
    const {data} = this.state;
    const personalImageId = 'personalic';

    return(
      this.state.data.main && (
        <section>
          <Header type='about' headline={data.main.headline}
            logoText={data.main.textLogo}
            personalImage={data.main.images.find(image => image.id === personalImageId)}/>
          <AboutDetails details={data.main.details}/>
        </section>
      )
    );
  }
}

export default About;