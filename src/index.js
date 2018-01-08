import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// COMPONENTS
import Settings from './components/settings';
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
        </div>
    </BrowserRouter>

    , document.getElementById('root'));

