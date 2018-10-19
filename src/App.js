import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <NotFound/>
      </AppLayout>
    );
  }
}

export default App;
