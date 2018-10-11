import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import SearchInput from './SearchInput.js';
import SearchKeywords from './SearchKeywords.js';

const 
  keywords = [
  "front-end development",
  "data analysis",
  "react"
],
  searchTerm = "data analysis",
  changeSearchTerm = newValue => {console.log(newValue)};

class App extends Component {
  render() {
    return (
      <AppLayout>
        <SearchInput colType="projects"
          searchTerm={searchTerm} changeSearchTerm={changeSearchTerm}
        />

        <SearchKeywords keywords={keywords} searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}/>
      </AppLayout>
    );
  }
}

export default App;
