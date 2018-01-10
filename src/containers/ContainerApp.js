import React from 'react';
import {Route, Link} from 'react-router-dom'
import Settings from './components/Settings';
import Registration from './components/registration';
import Registerstepone from './components/registerstepone';
import Registersteptwo from './components/registersteptwo';
import Registerstepthree from './components/registerstepthree';
import Login from './components/LoginComponent';
import MainChat from './components/mainChat';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <div>
        <BrowserRouter>
            <Route exact path="/" component={Login}>Login</Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/stepone" component={Registerstepone}></Route>
            <Route path="/steptwo" component={Registersteptwo}></Route>
            <Route path="/stepthree" component={Registerstepthree}></Route>
            <Route path="/mainChat" component={MainChat}></Route>
        </BrowserRouter>
    </div>
)