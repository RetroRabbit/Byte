import React from 'react';

import Message from './MessageComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Messages extends React.Component {
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages in the state and create a Message component
    const messages = this.props.messages.map((message, i) => {
        return (
          <MuiThemeProvider>
          <Message
            key={i}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe} />
             </MuiThemeProvider>
        );
      });

    return (
      <MuiThemeProvider>
        <div className="AddConversationMessageBoxSent">
      <div className='AddMessageBox' id='messageList'>
        { messages }
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