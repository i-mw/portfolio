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

  _isMounted = false;

  retrieveData = _ => {
    if (this._isMounted) {
      dbAPI.getDoc('about', 'main').then(data => {
        this.props.setIsExternalLoading(false);
        this.props.setIsOnline(true)
        if (this._isMounted) {
          this.setState({main: data});
        }
      })
      .catch(error => {
        if (error.message.indexOf('offline') > -1) {
          this.props.setIsOnline(false);
        }
      })
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.setIsExternalLoading(true);
    this.retrieveData()
  }

  componentWillUnmount() {
    this._isMounted = false;
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