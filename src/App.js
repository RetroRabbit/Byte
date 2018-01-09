import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './Css/App.css';
import ChatComponent from "./components/ChatComponent";
import HeaderComponent from "./components/HeaderComponent";
import SideComponent from "./components/SideComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {LoginToReg, RegToSecondReg, RegToThirdReg, LoginToHome} from './actions/Actions';

class App extends Component {
  constructor(props) {
      super(props);
      this.store = this.props.store;
  }

  handleLoginToReg = () => {
      this.store.dispatch(LoginToReg());
  }

  handleRegToSecondReg = () => {
    this.store.dispatch(RegToSecondReg());
  }
  
  handleRegToThirdReg = () => {
    this.store.dispatch(RegToThirdReg());
  }

  handleLoginToHome = () => {
    this.store.dispatch(LoginToHome());
  }

  render() {
    return(
        <MuiThemeProvider>
        <div>
            {/* <SideComponent/> */} 
        </div>
        </MuiThemeProvider>
    );
  }

}

export default App;
