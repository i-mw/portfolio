import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

function AppLayout(props) {
  return (
    <div id='app-container'>
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default AppLayout;