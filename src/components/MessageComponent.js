import React from 'react';
import '../Css/Chat.css';

class Message extends React.Component {
    
       render() 
       {
          return (
    
    
            <div id = "AddConversationMessageBoxSent">
            <br/>
              <div className={`message from ${this.props.username}`}>
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