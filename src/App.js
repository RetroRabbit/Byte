import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from './components/HeaderComponent';
import SideComponent from './components/SideComponent';
import ChatComponent from './components/ChatComponent';
import LoginComponent from './components/LoginComponent';

import logo from './Images/logo.svg';

class App extends Component{
render(){
 return(
<div className="App">
<MuiThemeProvider>
<LoginComponent/>
  </MuiThemeProvider>
  </div>
 );
}}

export default App;