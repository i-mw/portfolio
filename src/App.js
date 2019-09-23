import React from 'react';
import Loadable from 'react-loadable';
import './App.css';
import ExternalLoading from './ExternalLoading';
import NetworkError from './NetworkError';

function Loading(props) {
    if(props.error) {
        return (
            <div>
                <NetworkError placement="network-error-inline"/>
                <NetworkError placement="network-error-fixed"/>
            </div>
        )
    }
    else {
        return (
            <ExternalLoading/>
        )
    }
}

const LoadableBar = Loadable({
    loader: _ => import('./Application'),
    loading: Loading
});

function App(props) {
    return (
        <LoadableBar/>
    )
}

export default App;