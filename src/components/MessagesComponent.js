/*import React from 'react';

import Message from './MessageComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Messages extends React.Component {
  constructor(props){
    super(props)
    console.log('fd',props.messages);

  }
  componentDidUpdate() { 
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages in the state and create a Message component
    

    return (
      <MuiThemeProvider>
        
      <div className='AddMessageBox' id='messageList'>
        { this.props.message } 
        {this.renderContent}
      </div>
      
      </MuiThemeProvider>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;*/