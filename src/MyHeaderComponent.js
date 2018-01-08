import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import avatarLogo from './Icon.png';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';

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
      fontFamily: 'Avenir Next',
      marginTop:'25px',
      };
      
class MyHeaderComponent extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    open: false,
    newchatornamehover:'namehover'

  };
 }

 handleClick = (event) => {
  // This prevents ghost click.
  event.preventDefault();
  this.setState({
    open: true,
    newchatornamehover:'namehover',
    anchorEl: event.currentTarget,
  });
};

handleClick2 = (event) => {
  // This prevents ghost click.
  event.preventDefault();
  this.setState({
    open: true,
    newchatornamehover:'newchat',
    anchorEl: event.currentTarget,
  });
};

handleRequestClose = () => {
  this.setState({
    open: false,
  });
};
render(){

  const leftButtons=(
    <div>
    <FlatButton label="New Chat" onClick={this.handleClick2} style={buttonstyle}/>
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