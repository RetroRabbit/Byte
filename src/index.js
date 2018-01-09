import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import Settings from './components/Settings';

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}>Login</Route>
            <Route path="/Settings" component={Settings}></Route>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
