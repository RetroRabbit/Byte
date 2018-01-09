import React, { Component } from 'react';
//import logo from './Images/logo.svg';
import './Css/App.css';
import LoginComponent from "./components/LoginComponent";
import ChatComponent from "./components/ChatComponent";
import HeaderComponent from "./components/HeaderComponent";
import SideComponent from "./components/SideComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
      return <div className="App">
{/* <LoginComponent/> */}

        <MuiThemeProvider>
          <HeaderComponent/>
          <ChatComponent/>
          <SideComponent/>

</MuiThemeProvider>
      </div>;

  }

}

export default App;