import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import AboutSection from './AboutSection.js';

let sectionContent = {
  title: null,
  content: [
      {
          type: 'paragraph',
          i:  "I'm a front-end web developer on my way to become " +
              "full-stack, graduated from <a href='#'>Udacity</a> " +
              "in 2018. I've great passion about new web techniques, " +
              "on an ongoing journey of learning with keen eye for " +
              "details. Also, interested in data science, machine " +
              "learning and medical research. " +
              "My <a href='./projects'>work</a> " +
              "can tell a lot more about me."
      }
  ]
}

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AboutSection sectionContent={sectionContent}/>
      </AppLayout>
    );
  }
}

export default App;
