import React, { Component } from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import propTypes from 'prop-types';
import ExternalLoading from './ExternalLoading';

class AppLayout extends Component {
  render() {
    const {isExternalLoading, isOnline} = this.props;

    return (
      <div id='app-container'>
        {<Nav/>}
        {(isExternalLoading && isOnline) && <ExternalLoading/>}
        {this.props.children}
        {<Footer/>}
      </div>
    )
  }
}

AppLayout.propTypes = {
  isExternalLoading: propTypes.bool.isRequired,
  isFirstLoad: propTypes.bool.isRequired,
}

export default AppLayout;