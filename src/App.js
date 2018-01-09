import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyHeaderComponent from './components/HeaderComponent';
import HeaderComponent from './components/HeaderComponent';

class App extends Component{
render(){
 return(
<div className="App">
<MuiThemeProvider>
<HeaderComponent/>
  </MuiThemeProvider>
  </div>
 );
}
}

export default App;