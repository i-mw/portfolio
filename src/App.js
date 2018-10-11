import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import SearchInput from './SearchInput.js';
import SearchKeywords from './SearchKeywords.js';

const keywords = [
  "front-end development",
  "data analysis",
  "react"
];

class App extends Component {
  render() {
    return (
      <AppLayout>
        <SearchInput colType="projects" searchTerm="hello" changeSearchTerm={searchBox => {
          console.log(searchBox.value)
        }}/>

        <SearchKeywords keywords={keywords}/>
      </AppLayout>
    );
  }
}

export default App;
