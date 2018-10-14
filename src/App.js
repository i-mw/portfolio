import React, { Component } from 'react';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import RoutineTable from './RoutineTable';

const categories = [
  'front-end development'
],
dates = {
  startedAt: new Date('2018-9-16'),
  endedAt: null
},
duration = '6 months',
provider = {
  title: 'Udacity',
  link: 'https://udacity.com'
},
partOf = {
  'udacity-fend': {
      type: 'certificate',
      id: 'udacity-fend',
      title: "Udacity's front-end nanodegree"
  }
};




class App extends Component {
  render() {
    return (
      <AppLayout>
        <RoutineTable categories={categories} dates={dates}
          duration={duration} provider={provider} partOf={partOf}/>
      </AppLayout>
    );
  }
}

export default App;
