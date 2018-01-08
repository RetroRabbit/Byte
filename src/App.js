import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatComponent from "./ChatComponent";
import HeaderComponent from "./HeaderComponent";
import SideComponent from "./SideComponent";

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
