import React, { Component } from 'react';
import './Css/App.css';
import LoginComponent from "./components/LoginComponent";
import ChatComponent from "./components/ChatComponent";
import HeaderComponent from "./components/HeaderComponent";
import SideComponent from "./components/SideComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {LoginToReg,RegToSecondReg,RegToThirdReg,LoginToHome} from './actions/Actions';


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
      return <div className="App">


          <MuiThemeProvider>
          {/* <LoginComponent/>   */}
          <HeaderComponent/>
          <ChatComponent/>
          <SideComponent/>

          </MuiThemeProvider>

      </div>;

  }

}
export default App;
