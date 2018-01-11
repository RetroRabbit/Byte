import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import avatarLogo from '../Images/Icon.png';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import '../Css/Header.css';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/navigation/cancel';
import { connect } from 'react-redux'
import DefImage from '../Images/bunnyDefault.jpg';
import { bindActionCreators } from 'redux'
import { logout } from '../reducers/Reducers'

const appbarstyle = {
  backgroundColor: '#01B9BD',
  height: '100px',
};

const avatarStyle = {
  marginLeft: '10px',
  marginTop: '5px',
  borderColor: '#d6d7da',
  borderWidth: '50px',
  width: '67px',
  height: '67px',
  color: '#ffffffs'
};

const buttonstyle = {
  color: '#ffffff',
  height: '54px',
  width: '143px',
  backgroundColor: '#0DABAF',
  marginLeft: '20px',
};
const profileNameStyle = {
  color: '#ffffff',
  height: '30px',
  fontSize: '20px',
  marginTop: '25px',
};

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newchatornamehover: false,
      newchat_color: true,
    };
    console.log(props);
  }
  changeColor() {
    this.setState({ newchat_color: !this.state.newchat_color })
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  newChatClick = (event) => {
    // This prevents ghost click.
    this.changeColor();
    event.preventDefault();
    this.setState({
      newchatornamehover: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  newChatCloseRequest = () => {
    this.changeColor();
    this.setState({
      newchatornamehover: false,
    });
  };

  submit() {
    this.props.logout();
}  


  render() {
    //rendering the background color of a new chat button based on hovering action of the user
    var bgColor = this.state.newchat_color ? "#0DABAF" : "#FF5722"
    const leftButtons = (
      <div>
        <FlatButton label="New Chat" onClick={this.newChatClick} onMouseEnter={this.newChatClick} style={{ backgroundColor: bgColor, color: '#ffffff', height: '54px', width: '143px', marginLeft: '20px', }} />
        <Popover
          open={this.state.newchatornamehover}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          canAutoPosition={true}
          onRequestClose={this.newChatCloseRequest}
        >

          <List>
            <ListItem rightIcon={
              <div onClick={this.newChatCloseRequest}>
                <ActionInfo />
              </div>
            }
            >
              <TextField
                hintText="Friends Email"
              />
            </ListItem>
          </List>

        </Popover>
        <FlatButton label="New Group" style={buttonstyle} />
      </div>
    );

    const rightContent = (
      <div>
        <div style={{ float: 'left' }} >
          <p style={profileNameStyle} onMouseEnter={this.handleClick} onClick={this.handleClick}> {this.props.username} </p>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
            <Link to="/settings"  > <MenuItem primaryText="Settings" > </MenuItem>  </Link>
            <Link to="/" onClick={ this.submit } > <MenuItem primaryText="Logout" > </MenuItem>  </Link>
            </Menu>
          </Popover>
        </div>
        <div style={{ float: 'right' }}>
          <Avatar src={this.props.userimage} style={avatarStyle} />
        </div >

        <div style={{ float: 'right' }}>
          <Avatar src={avatarLogo} onClick={this.handleClick} onMouseEnter={this.handleClick} style={avatarStyle} />
        </div >
      </div>
    );

    return (
      <div>
        <AppBar
          style={appbarstyle}
          iconElementLeft={leftButtons}
          iconElementRight={rightContent}
        />
      </div>
    );
  }
}

const mapStateToProps = ({login}) => ({
    username: login.userName,
    password: login.password,
    userimage: login.userImage
 })

 
 const mapDispatchToProps = dispatch => bindActionCreators({
  logout
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)
