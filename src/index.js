import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Settings from './components/Settings';
import {createStore} from 'redux';
import myReducers from './reducers/Reducers';

let store = createStore(myReducers);

function render(){
    ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
    );
}

store.subscribe(render);

render();