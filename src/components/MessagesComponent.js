import React from 'react';

import Message from './MessageComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Messages extends React.Component {
  constructor(props){
    super(props)
    console.log('fd',props.messages)

  }
  componentDidUpdate() { 
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  renderContent() {
    return (
      <br/>
    )
  }



  render() {
    // Loop through all the messages in the state and create a Message component
    const messages = this.props.messages.map((message, i) => {
        return (
          
          <Message
            key={i}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe} />
            
        
             
        );
      });

    return (
      <MuiThemeProvider>
        <div className="AddConversationMessageBoxSent">
      <div className='AddMessageBox' id='messageList'>
        {  messages} 
        {this.renderContent}
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;