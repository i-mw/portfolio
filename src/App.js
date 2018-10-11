import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import  Header from "./Header";

const
  headline = "My Projects",
  headlinePoints = [
    {
        title: null,
        content: [
            {
                type: 'paragraph',
                i:  "These are a combination of personal, production, " +
                    "and course related projects."
            },
            {
                type: 'paragraph',
                i: "Use search tool to find related projects"
            }
        ]
    }
  ],
  primaryLang = 'javascript',
  parentCollection = 'projects',
  logoText = "                      ###   ###                      <br>\
                     ####   ###         ###          <br>\
                    #####   ###           ###        <br>\
                   ######   ###             ###      <br>\
                  #######   ###              ###     <br>\
     ##          ###  ###   ###                ###   <br>\
    ######      ###   ###   ###                 ###  <br>\
   ###  #####  ###    ###   ###                  ### <br>\
  ###      ######     ###   ###                   ###<br>\
 ###         ###      ###   ###                   ###<br>\
###           #       ###   ###                   ###<br>\
###                   ###   ###                   ###<br>\
###                   ###   ###                   ###<br>\
###                   ###   ###       #           ###<br>\
###                   ###   ###      ###         ### <br>\
###                   ###   ###     ######      ###  <br>\
 ###                  ###   ###    ###  #####  ###   <br>\
  ###                 ###   ###   ###      ######    <br>\
   ###                ###   ###  ###          ##     <br>\
     ###              ###   #######                  <br>\
      ###             ###   ######                   <br>\
        ###           ###   #####                    <br>\
          ###         ###   ####                     <br>\
                      ###   ###                      ",
    personalImage = {
      placing: 'about',
      size: 'icon',
      id: 'personalic',
      caption: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v2-9ca05.appspot.com/o/about%2Fphoto.PNG?alt=media&token=73338ff6-550f-4e63-bcd0-c9a220560cc6'
    },
    type = 'not-found'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header
          headline={headline}
          headlinePoints={headlinePoints}
          primaryLang={primaryLang}
          parentCollection={parentCollection}
          logoText={logoText}
          personalImage={personalImage}
          type={type}
        />
      </AppLayout>
    );
  }
}

export default App;
