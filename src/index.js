import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Settings from './components/Settings';
import Registration from './components/registration';
import Registerstepone from './components/registerstepone';
import Registersteptwo from './components/registersteptwo';
import Registerstepthree from './components/registerstepthree';
import Login from './components/login';
import MainChat from './components/mainChat';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login}>Login</Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/stepone" component={Registerstepone}></Route>
            <Route path="/steptwo" component={Registersteptwo}></Route>
            <Route path="/stepthree" component={Registerstepthree}></Route>
            <Route path="/mainChat" component={MainChat}></Route>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();

