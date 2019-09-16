import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import ExternalLoading from './ExternalLoading';
import isInternalLoading from './InternalLoading'
import 'focus-visible';
import './App.css';
import AppLayout from './AppLayout.js';
import NotFound from './NotFound';
import About from './About';
import Collection from './Collection'
import Document from './Document'
import NetworkError from './NetworkError'

class App extends Component {
  state = {
    isExternalLoading: true,
    isInternalLoading: false,
    isFirstLoad: true,
    isOnline: true
  }

  /* set external loading, loading a whole page */
  setIsExternalLoading = isExternalLoading => {
    if (!isExternalLoading) {
      this.setIsFirstLoad(false)
    }
    this.setState({isExternalLoading})
  }

  /* set internal loading, loading a part or an element of a page */
  setIsInternalLoading = isInternalLoading => {
    this.setState({isInternalLoading})
  }

  /* determine if this is the website's first load */
  setIsFirstLoad = isFirstLoad => {
    this.setState({isFirstLoad})
  }

  setIsOnline = isOnline => {
    this.setState({isOnline})
  }

  render() {
    const collections = ['projects', 'snippets', 'skills',
      'courses', 'certificates', 'readings'];    
    const {isExternalLoading, isFirstLoad, isOnline} = this.state;

    console.log('rendering app ------')

    return (
      <section>
        {(isExternalLoading && isOnline) && <ExternalLoading/>}
        <AppLayout isExternalLoading={isExternalLoading}
                  isFirstLoad={isFirstLoad}>
          <Switch>
            <Route exact path="/" render={_ => <About setIsExternalLoading={this.setIsExternalLoading}
                                                      isOnline={isOnline}
                                                      setIsOnline={this.setIsOnline}/>}/>
            {
              collections.map(col => (
                <Route key={col} exact path={'/' + col}
                  render={props => <Collection
                                      setIsExternalLoading={this.setIsExternalLoading}
                                      setIsInternalLoading={this.setIsInternalLoading}
                                      isInternalLoading={this.state.isInternalLoading}
                                      isOnline={isOnline}
                                      setIsOnline={this.setIsOnline}
                                      colType={col}
                                      {...props}/>}/>
              ))
            }
            {
              collections.map(col => (
                <Route key={col} exact path={'/' + col + '/:doc'}
                  render={props => <Document
                                      setIsExternalLoading={this.setIsExternalLoading}
                                      setIsInternalLoading={this.setIsInternalLoading}
                                      isInternalLoading={this.state.isInternalLoading}
                                      setIsOnline={this.setIsOnline}
                                      isOnline={this.state.isOnline}
                                      parentCollection={col}
                                      documentId={props.match.params.doc}/>}
                />
              ))
            }
            <Route component={NotFound}/>
          </Switch>
          {!isOnline && <NetworkError placement="network-error-fixed"/>}
        </AppLayout>
      </section>
    );
  }
}

export default App;
