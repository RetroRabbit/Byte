import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// COMPONENTS
import Settings from './components/settings';
import Registration from './components/registration';
import Registerstepone from './components/registerstepone';
import Registersteptwo from './components/registersteptwo';
import Registerstepthree from './components/registerstepthree';

class App extends Component {

    render(){
        return(
            <div> Login Page </div>
        )
    }

}

ReactDOM.render(
    
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}>Login</Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/stepone" component={Registerstepone}></Route>
            <Route path="/steptwo" component={Registersteptwo}></Route>
            <Route path="/stepthree" component={Registerstepthree}></Route>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));