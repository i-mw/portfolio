import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import SearchInput from './SearchInput.js';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <SearchInput colType="projects" searchTerm="hello"/>
      </AppLayout>
    );
  }
}

export default App;
