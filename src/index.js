import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './Css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Settings from './Components/settings';

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}>Login</Route>
            <Route path="/settings" component={Settings}></Route>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
