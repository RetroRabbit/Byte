import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';
import '../Css/Chat.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import {
  getChat
} from '../modules/chats'

class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChats: props.chatList
    }
  }


  render() {

    console.log(this.props.userchats);
    var chats = this.props.userchats;
    const pStyle = {

      display: 'block',
      width: 'auto',
      textAlign: 'center',
      display: 'block',
     
    }

    const bubbleStyle = {
     
      backgroundColor: '#0DABAF',
      borderRadius: '5em',
      max:'auto',
      height:'auto',
      maxWidth: '60%',
      overflowWrap: 'normal',
      float: 'right',
      
    }

    const chat = (
      <div className="Main">
        <div id="Addbutton">
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </div>


        {chats.map(function (a) {
              const temp = a.type;
              var html = "";
               {temp ?
                   html = (
                     <div>
                      <li id="AddConversationMessageBoxSent">
                        <div className="ChatText">
                         {a.msg}
                         </div> 
                      
                      </li>
                      <div>
                        <br/>
                        <br/>
                        <br/>
                        </div>
                    </div>
                        )
          :
            html = (
              <div>
                <div>
                  <p style={pStyle}>
                    {a.msg} 
                  </p>            
                </div>
              </div>
            )
          }
          return(html);
        })}





      </div>

    );
    return (
      <MuiThemeProvider>
        {chat}
      </MuiThemeProvider>
    );
  }


}

//export default Header;
const mapStateToProps = (state) => ({
  userchats: state.chats.chatsList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getChat
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent)
