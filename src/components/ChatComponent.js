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


  appendNewMessagesToChat(e){

    //alert('Working');
    //console.log(this);
    // console.log(e.target);
    // var code = (e.keyCode ? e.keyCode : e.which);
    //   if(code == 13) { //Enter keycode
    // alert('Pressed');
    // }

    //var x = e.which || e.keyCode;
    //document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
    //console.log("The Unicode value is: " + x);

    document.getElementById('AddMessageBox').addEventListener('keydown', this.focusnextbutton ,false);

  }

   focusnextbutton(e){

    if(e.keyCode == 13){
         //alert('Button was enter');

         var contentInserted = e.target.value;
         console.log(contentInserted);

         var elChild = document.querySelector('#newMessageHere');

         elChild.innerHTML += '\n' + '<div id="AddNewMessageSent"> <div className="ChatText" >' + contentInserted + '</div> </div> \n';
         
         //elChild.appendChild = 'Laurent is typing';
         //document.querySelector("AddMessageBox").textContent.value = "";
    }
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
            <input id="AddMessageBox" className="EnterText" type="text" onChange={ this.appendNewMessagesToChat.bind(this) } />
        <div className="Messages" id="Messages">  

        {/* <div id = "AddConversationMessageBoxSent">
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
        </div> */}

        <div id="newMessageHere">

        </div>

</div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default ChatComponent;