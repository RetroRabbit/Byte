import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from './components/HeaderComponent';
import logo from './Images/logo.svg';

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
import logo from './Images/logo.svg';
import './Css/App.css';
import LoginComponent from "./components/LoginComponent";
import ChatComponent from "./components/ChatComponent";
import HeaderComponent from "./components/HeaderComponent";
import SideComponent from "./components/SideComponent";

class App extends Component {
  render() {
      return <div className="App">
<LoginComponent/>




      </div>;

  }

}

export default App;