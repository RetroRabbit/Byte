import React, { Component } from 'react';
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

}

export default App;
