import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import Collection from './Collection'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Collection colType="projects"/>
      </AppLayout>
    );
  }
}

export default App;
