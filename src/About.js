import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import AboutDetails from './AboutDetails';

class About extends Component {
  state = {
    main: null
  }

  retrieveData = _ => {
    dbAPI.getDoc('about', 'main').then(data => {
      this.props.setIsExternalLoading(false);
      this.setState({main: data});
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
      this.state.main && (
        <section>
          <Header type='about' headline={main.headline}
            logoText={main.textLogo}
            logoImage={main.images.find(image => image.id === logoImageId)}
            personalImage={main.images.find(image => image.id === personalImageId)}/>
          <AboutDetails details={main.details}/>
        </section>
      )
    );
  }
}

About.propTypes = {
  setIsExternalLoading: propTypes.func.isRequired
}

export default About;