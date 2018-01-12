import React from 'react';
import '../Css/Chat.css';

import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { } from '../actions/Actions';
import messages from '../reducers/messageReducer'
import loginred from '../reducers/Reducers'


import { setMessage, setFromMe, setTimeStamp, getFromMe, getMessage } from '../reducers/ChatReducers';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Clear the input box
    this.setState({ chatInput: '' });

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);
    console.log(this.state.chatInput);
  }

  textChangeHandler(event)  {
    this.setState({ message: event.target.value });
  }

handleKeyPressTest = (e) => {
    if (e.key === 'Enter') {
      var message=e.target.value;
      var username=this.props.username
      e.preventDefault();
      this.props.dispatch(setMessage(username,message));

    }
  }

  render() {
   
    return (
      <form id="ChatForm" className="Main" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
       //   value={this.state.chatInput}
          onKeyPress={this.handleKeyPressTest}
         className="EnterText"
          id="AddMessageBox"
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.login.userName,
  password: state.password,
  message:state.message
})

const mapDispatchToProps=dispatch=>bindActionCreators({
  setMessage, setFromMe, setTimeStamp, getFromMe, getMessage
},dispatch)
export default connect(
  mapStateToProps,
  null
)(ChatInput)
