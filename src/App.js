import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import RemoteDataPoint from './RemoteDataPoint'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <RemoteDataPoint
          parentCollection={'skills'} searchCollection={'projects'}
          searchProperty={'skills.html.id'} searchValue={'html'}/>
      </AppLayout>
    );
  }
}

export default App;
