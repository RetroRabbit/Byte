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
    appendNewMessagesToChat(e){

      //alert('Working');
      //console.log(this);
      // console.log(e.target);
      // var code = (e.keyCode ? e.keyCode : e.which);
      //   if(code == 13) { //Enter keycode
      // alert('Pressed');
      // }
  
      //var x = e.which || e.keyCode;
      //document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
      //console.log("The Unicode value is: " + x);
  
      document.getElementById('AddMessageBox').addEventListener('keydown', this.focusnextbutton ,false);
  
    }

    focusnextbutton(e){

      if(e.keyCode == 13){
           //alert('Button was enter');
  
           var contentInserted = e.target.value;
           console.log(contentInserted);
  
           var elChild = document.querySelector('#newMessageHere');
  
           elChild.innerHTML += '\n' + '<div id="AddNewMessageSent"> <div className="ChatText" >' + contentInserted + '</div> </div> \n';
           
           //elChild.appendChild = 'Laurent is typing';
           //document.querySelector("AddMessageBox").textContent.value = "";
      }
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
{/*
      <div id="Addbutton">
*/}
{/*<FloatingActionButton>
  <ContentAdd/>
</FloatingActionButton>*/}
{/*
</div>
  <input id="AddMessageBox" className="EnterText" type="text" onChange={ this.appendNewMessagesToChat.bind(this) } />
<div className="Messages" id="Messages">  */}

{/* <div id = "AddConversationMessageBoxSent">
    <div className="ChatText" >
  To send messages is to make them appear here as this looks. It is important that they are displayed here so we can see what the other person has sent to us. It will text wrap. 
</div>
<div id = "AddTimeSent">
  <label>
    07:48pm
  </label>
</div>
</div>

<div id = "AddConversationMessageBoxReceived">
<div className="ChatText" >
      
This is some text that will be received by the user. It will text wrap if the text is too long.
        
</div>
<div id = "AddTimeReceived">
  <label>
    07:45pm
  </label>
</div>
</div> */}

{/*
<div id="newMessageHere">

</div>*/}
{/*
</div> */}

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
  username: state.login.userName,
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
