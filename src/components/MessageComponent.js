import React from 'react';
import '../Css/Chat.css';

class Message extends React.Component {
  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
//Need to change to current template

<div id = "AddConversationMessageBoxSent">
<br/>
       
      <div className={`message ${fromMe}`}>
        <div className='username'>
          { this.props.username }
        </div>
        <div className='ChatText'>
          { this.props.message }
        </div>

    

      </div>
  </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false
};

export default Message;