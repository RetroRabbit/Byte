import React, { Component } from 'react';
import LoginComponent from "../components/LoginComponent";
import ChatComponent from "../components/ChatComponent";
import HeaderComponent from "../components/HeaderComponent";
import SideComponent from "../components/SideComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux'


class MainChat extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
  render() {
      return <div className="App">


          <MuiThemeProvider>
         {/*<LoginComponent/>*/}   
          <HeaderComponent/>
          <ChatComponent/>
          <SideComponent/>

</MuiThemeProvider>
      </div>;

  }

}

const mapStateToProps = ({login}) => ({
    username: login.userName,
    password: login.password
 })

 
 export default connect(
    mapStateToProps,
    null
 )(MainChat)
