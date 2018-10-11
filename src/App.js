import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import AboutSections from './AboutSections';

const details = [
  {
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
  },
  {
      title: null,
      content: [
          {
              type: 'paragraph',
              i:  "You can check my repositories at " +
                  "<a href='https://github.com/i-mw'>Github</a>, " +
                  "follow me on <a href='https://twitter.com/idashmw'>" +
                  "Twitter</a>, connect with me at " +
                  "<a href='https://linkedin.com/in/mustafawahba'>" +
                  "Linkedin</a>, email me at " +
                  "<a href='mailto:mustafa.m.wahba@gmail.com'>" +
                  "mustafa.m.wahba@gmail.com</a>, " +
                  "or identify me on the internet with the handle i-mw."
          }
      ]
  }
]

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AboutSections details={details}/>
      </AppLayout>
    );
  }
}

export default App;
