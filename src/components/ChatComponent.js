import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../Css/Chat.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';




class ChatComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <MuiThemeProvider>
      <div className =  "Main">
        <div id="Addbutton">
          <FloatingActionButton>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
        <div id = "AddMessageBox">
          <TextField hintText = "Enter Message Here"/>
          </div>
        <div className="Messages">  
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
      </div>
      </MuiThemeProvider>
    );
  }
}

export default ChatComponent;