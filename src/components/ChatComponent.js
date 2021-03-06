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
            <input id="AddMessageBox" className="EnterText" type="text" />
        <div className="Messages">  
        <div id = "AddConversationMessageBoxSent">
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
        </div>

</div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default ChatComponent;