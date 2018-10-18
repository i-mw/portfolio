import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import ProSnpTechnicalTable from './ProSnpTechnicalTable'

let skills = {
  'html': {
      id: 'html',
      title: 'html'
  }, 
  'javascript': {
      id: 'javascript',
      title: 'javascript'
  },
  'css': {
      id: 'css',
      title: 'css'
  },
  'jquery': {
      id: 'jquery',
      title: 'jQuery'
  }
};

class App extends Component {
  render() {
    return (
      <AppLayout>
        <ProSnpTechnicalTable skills={skills}/>
      </AppLayout>
    );
  }
}

export default App;
