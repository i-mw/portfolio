import React, { Component } from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import propTypes from 'prop-types';

class AppLayout extends Component {
  render() {
    if (this.props.isExternalLoading && this.props.isFirstLoad) {
      return (
        <div id='app-container'>
          {this.props.children}
        </div>
      )  
    } else {
      return (
        <div id='app-container'>
          {<Nav/>}
          {this.props.children}
          {<Footer/>}
        </div>
      )
      }  
    }

}

AppLayout.propTypes = {
  isExternalLoading: propTypes.bool.isRequired,
  isFirstLoad: propTypes.bool.isRequired,
}

export default AppLayout;