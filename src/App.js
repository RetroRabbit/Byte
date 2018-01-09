import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import logo from './Images/logo.svg';
import './Css/App.css';
import ChatComponent from "./components/ChatComponent";
import HeaderComponent from "./components/HeaderComponent";
import SideComponent from "./components/SideComponent";

class App extends Component {
  render() {
      return <div className="App">

          <HeaderComponent/>
          <ChatComponent/>
          <SideComponent/>

      </div>;
  }

>>>>>>> 505b8b75fc472677fceee691200a0dc8a11b99a2
}

export default App;