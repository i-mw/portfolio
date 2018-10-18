import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import Search from './Search'

const colType = 'projects';
const keywords = ['featured', 'new'];
const retrievedDocs = 
[{
  id: 'matching-game',
  title: 'matching game',
  images: [{
          placing: 'thumbnail',
          size: 'thumbnail',
          id: 'magatm',
          caption: '',
          url: ''
      }
  ],
  primaryLanguage: 'javascript',
  keywords: [
      'matching game',
      'javascript',
      'js',
      'html',
      'css',
      'front-end development',
      'front end development',
      'game development',
      'font awesome',
      'github pages',
      'documentation'
  ],
  dates: {
      startedAt: new Date('2018-5-1'),
      endedAt: new Date('2018-5-3')
  }
}
,{
  id: 'classic-arcade-game',
  title: 'classic arcade game',
  images: [{
          placing: 'thumbnail',
          size: 'thumbnail',
          id: 'clargatm',
          caption: '',
          url: ''
      }
  ],
  primaryLanguage: 'javascript',
  keywords: [
      'classic arcade game',
      'javascript',
      'js',
      'html',
      'css',
      'front-end development',
      'front end development',
      'game development',
      'github pages',
      'html5 canvas',
      'object-oriented programming',
      'object oriented programming',
      'documentation'
  ],
  dates: {
      startedAt: new Date('2018-7-6'),
      endedAt: new Date('2018-7-10')
  }
}];



class App extends Component {
  render() {
    return (
      <AppLayout>
        <Search colType={colType} keywords={keywords} retrievedDocs={retrievedDocs}/>
      </AppLayout>
    );
  }
}

export default App;
