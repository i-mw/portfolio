import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import NotFound from './NotFound';
import About from './About';
import Collection from './Collection'
import Document from './Document'
import Loading from './Loading'

class App extends Component {
  state = {
    isLoading: true
  }

// todo: complete loading icon here and down 
  setIsLoading = isLoading => {
    this.setState({isLoading})
  }

  render() {
    const collections = ['projects', 'snippets', 'skills',
      'courses', 'certificates', 'readings'];
    
    const {isLoading} = this.state;
    // todo: complete loading icon here and down
    console.log('rendering app ------')

    return (
      <section>
      {isLoading && <Loading/>}
      <AppLayout>
        <Switch>
          <Route exact path="/" render={_ => <About setIsLoading={this.setIsLoading}/>}/>
          {
            collections.map(col => (
              <Route key={col} exact path={'/' + col}
                render={props => <Collection
                                    setIsLoading={this.setIsLoading}
                                    colType={col}
                                    {...props}/>}/>
            ))
          }
          {
            collections.map(col => (
              <Route key={col} exact path={'/' + col + '/:doc'}
                render={props => <Document
                                    setIsLoading={this.setIsLoading}
                                    parentCollection={col}
                                    documentId={props.match.params.doc}/>}
              />
            ))
          }
          <Route component={NotFound}/>
        </Switch>
      </AppLayout>
      </section>
    );
  }
}

export default App;
