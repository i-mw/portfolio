import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import AboutDetails from './AboutDetails';
import NetworkError from './NetworkError'

class About extends Component {
  state = {
    main: null
  }

  retrieveData = _ => {
    dbAPI.getDoc('about', 'main').then(data => {
      this.props.setIsExternalLoading(false);
      this.props.setIsOnline(true)
      this.setState({main: data});
    })
    .catch(error => {
      if (error.message.indexOf('offline') > -1) {
        this.props.setIsOnline(false);
      }
    })
  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (About component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    this.props.setIsExternalLoading(true);
    this.retrieveData()
  }

  render() {
    const {main} = this.state;
    const personalImageId = 'personalic';
    const logoImageId = 'logoic';

    return(
      this.state.main ? (
        <section>
          <Header type='about' headline={main.headline}
            logoText={main.textLogo}
            logoImage={main.images.find(image => image.id === logoImageId)}
            personalImage={main.images.find(image => image.id === personalImageId)}/>
          <AboutDetails details={main.details}/>
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

About.propTypes = {
  setIsExternalLoading: propTypes.func.isRequired,
  isOnline: propTypes.bool.isRequired,
  setIsOnline: propTypes.func.isRequired
}

export default About;