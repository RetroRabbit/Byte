import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import CSS from './index.css';



class ChatComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className =  "App">
        <div id="Addbutton">
          <FloatingActionButton>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
        <div id = "AddMessageBox">
          <TextField hintText = "Enter Message Here"/>
        </div>
        <div id = "AddConversationMessageBoxSent">
          <TextField TextArea={true} rows = {2} disabled value={'To send messages is to make them appear here as this looks. It is important that they are displayed here so we can see what the other person has sent to us'}>
            
          </TextField>
          <div id = "AddTimeSent">
            <label>
              07:48pm
            </label>
          </div>
        </div>
        <div id = "AddConversationMessageBoxReceived">
          <TextField multiline={true} rows = {2} disabled value={'This is some text that will be received by the user'}>
            
          </TextField>
          <div id = "AddTimeReceived">
            <label>
              07:45pm
            </label>
          </div>
        </div>


      </div>
    );
  }
}

export default ChatComponent;