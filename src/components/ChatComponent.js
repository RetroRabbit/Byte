import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../Css/Chat.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';

import io from 'socket.io-client';

import ChatInput from './ChatInputComponent';
import ChatMessage from './MessageComponent';
import Message from './MessageComponent';

import ReactDOM from 'react-dom';

import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { } from '../actions/Actions';
import { setMessage, setFromMe, setTimeStamp, getFromMe, getMessage } from '../reducers/ChatReducers';

class ChatComponents extends React.Component {
  //Take out socket 
  //socket = {};
  constructor(props) {
    super(props);

    this.state = {
       message: '',
       submittedValue: '' 
    };

      console.log(props)
      this.sendHandler = this.sendHandler.bind(this);
      this.addMessage = this.addMessage.bind(this);
      this.submit = this.submit.bind(this);
    
    }

    sendHandler(username, message) {

    setMessage(username, message);
    if(username === this.state.username)
    {
      setFromMe(true);
    }
    else
    {
      setFromMe(false);
    }
  
  }

  addMessage(event) {
    // Push to message stack
    //this.state.messages;
    //const messages = "";
   // messages.push(message);
   // this.setState({ messages });
    //console.log(messages);
//    event.preventDefault();
    this.setState({submit: event.target.message});
    
  }
  submit()
  {
    this.props.setMessage(this.state.username, this.state.message);
  }

  //ClassName = 'AddMessageBox'
  //EnterText ChatInput
  render() {
    return (
      <MuiThemeProvider>
      <div className="Main">


      <Message  />
      <div> </div>

      <div id="Addbutton">
      <FloatingActionButton >
            <ContentAdd/>
          </FloatingActionButton>
        </div>
        <ChatInput onSend={this.addMessage}
        id="" 
        className="" />
      </div>
      </MuiThemeProvider>
    );
  }

}

const mapStateToProps = (state) => ({
  username: state.userName,
  password: state.password,
  message: state.message
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setMessage
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponents)
