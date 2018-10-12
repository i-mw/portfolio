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
          parentCollection={'certificates'} searchCollection={'projects'}
          searchProperty={'partOf.udacity-fend.id'} searchValue={'udacity-fend'}/>
      </AppLayout>
    );
  }
}

export default App;
