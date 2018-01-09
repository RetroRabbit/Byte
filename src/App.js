import React, { Component } from 'react';
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
