import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import NotFound from './NotFound';
import About from './About';
import Collection from './Collection'
import Document from './Document'

class App extends Component {
  render() {
    const collections = ['projects', 'snippets', 'skills',
      'courses', 'certificates', 'readings'];

    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" component={About}/>
          {
            collections.map(col => (
              <Route key={col} exact path={'/' + col} render={_=> <Collection colType={col} />}/>
            ))
          }
          {
            collections.map(col => (
              <Route key={col} exact path={'/' + col + '/:doc'}
                render={props => <Document parentCollection={col} documentId={props.match.params.doc}/>}
              />
            ))
          }
          <Route component={NotFound}/>
        </Switch>
      </AppLayout>
    );
  }
}

export default App;
