import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import avatarLogo from './Icon.png';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import TextField from 'material-ui/TextField';

const appbarstyle={
  backgroundColor: '#01B9BD',
  height: '103px',
};

const avatarStyle={
  marginLeft:'10px',
  marginTop:'5px',
  borderColor: '#d6d7da',
  borderWidth:'50px',
  width:'67px',
  height:'67px',
  color:'#ffffffs'
};

  const buttonstyle={
    color:'#ffffff',
    height:'54px',
    width:'143px',
    backgroundColor: '#0DABAF',
    marginLeft:'20px',
  };


    const profileNameStyle={
      color:'#ffffff',   
      height:'30px',
      fontSize:'20px',
      marginTop:'25px',
      };
      
class MyHeaderComponent extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    open: false,
    newchatornamehover:false
  };
 }

 handleClick = (event) => {
  // This prevents ghost click.
  event.preventDefault();
  this.setState({
    open: true,
    anchorEl: event.currentTarget,
  });
};

handleClick2 = (event) => {
  // This prevents ghost click.
  event.preventDefault();
  this.setState({
    newchatornamehover:true,
    anchorEl: event.currentTarget,
  });
};

handleRequestClose = () => {
  this.setState({
    open: false,
  });
};
handleRequestClose2 = () => {

  this.setState({
    newchatornamehover:false,
  });
};
render(){
  const leftButtons=(
    <div>
    <FlatButton label="New Chat" onClick={this.handleClick2} onMouseEnter={this.handleClick2} style={buttonstyle}/>
    <Popover
          open={this.state.newchatornamehover}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose2}
          style={{float:'marginTop:30px,'}}
        >
          <Menu >
            <MenuItem> 
            <TextField hintText="Friends Email" />
            </MenuItem>
          </Menu>
        </Popover>
    <FlatButton label="New Group" style={buttonstyle} />
    </div>
    );

const rightContent=(
  <div>
    <div  style={{float:'left'}} >
  <p style={profileNameStyle} onMouseEnter={this.handleClick} onClick={this.handleClick}> Addie Logan  </p>
  <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Logout" />
          </Menu>
        </Popover>
        </div>
        <div style={{float:'right'}}>
  <Avatar  src={avatarLogo}  style={avatarStyle}/>
  </div >

  <div  style={{float:'right'}}>
  <Avatar  src={avatarLogo} onClick={this.handleClick}  onMouseEnter={this.handleClick}   style={avatarStyle}/>
  </div >

   
  </div>
  );

  return(
    <AppBar  
    style={appbarstyle}
    iconElementLeft={leftButtons}
    iconElementRight={rightContent}
    />
  );
 }
}

export default MyHeaderComponent;