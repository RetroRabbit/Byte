import React, { Component } from 'react';
import LoginComponent from "../components/LoginComponent";
import ChatComponent from "../components/ChatComponent";
import HeaderComponent from "../components/HeaderComponent";
import SideComponent from "../components/SideComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom"



class MainChat extends Component {
    render() {
        return <div className="App">
            <MuiThemeProvider>
                <HeaderComponent />
                <SideComponent />
            </MuiThemeProvider>
        </div>;


    }

}


export default MainChat;
