import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import About from './About'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <About/>
      </AppLayout>
    );
  }
}

export default App;
