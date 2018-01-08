import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyHeaderComponent from './MyHeaderComponent';

class App extends Component{
render(){
 return(
<div className="App">
<MuiThemeProvider>
<MyHeaderComponent/>
  </MuiThemeProvider>
  </div>
 );
}
}

export default App;