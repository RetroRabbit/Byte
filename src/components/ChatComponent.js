import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../Css/Chat.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';

import io from 'socket.io-client';

import ChatInput from './ChatInputComponent';
import ChatMessage from './MessageComponent';
import Messages from './MessagesComponent';

import ReactDOM from 'react-dom';

class ChatComponents extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);
    
    // Connect to the server
    this.socket = io("http://localhost", { query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message

    };

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    if(messageObject.fromMe == true)
    {
      
    }
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
    console.log(messages);
   
    
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="Main">

      <Messages messages={this.state.messages} className="AddMessageBox"/>

      <div id="Addbutton">
      <FloatingActionButton >
            <ContentAdd/>
          </FloatingActionButton>
        </div>
        <ChatInput onSend={this.sendHandler}
        id="AddMessageBox" 
        className="EnterText" />
      </div>
      </MuiThemeProvider>
    );
  }

}
ChatComponents.defaultProps = {
  username: 'Anonymous'
};

export default ChatComponents;