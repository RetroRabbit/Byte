import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './Css/App.css';
import ChatComponent from "./Components/ChatComponent";
import HeaderComponent from "./Components/HeaderComponent";
import SideComponent from "./Components/SideComponent";

class App extends Component {
  render() {
      return <div className="App">

          <HeaderComponent/>
          <ChatComponent/>
          <SideComponent/>

      </div>;
  }

}

export default App;
