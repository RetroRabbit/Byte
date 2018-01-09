import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import avatarLogo from '../Images/logo.svg';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const appbarstyle={
    backgroundColor: '#01B9BD',
    height: '103px',
};

const avatarStyle={
    marginLeft:'10px',
    marginTop:'5px',
    borderColor: '#d6d7da',
    borderWidth:'50px',
    color:'#ffffffs'
};

const buttonstyle={
    color:'#ffffff',
    height:'54px',
    width:'143px',
    backgroundColor: '#0DABAF',
    marginLeft:'20px',
};

const leftButtons=(
    <div>
        <FlatButton label="New Chat" style={buttonstyle}/>
        <FlatButton label="New Group" style={buttonstyle} />
    </div>
);

const profileNameStyle={
    color:'#ffffff',
};

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            open: false,
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

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render(){

        const rightContent=(
            <MuiThemeProvider>
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

                <div style={{float:'right'}}>
                    <Avatar  src={avatarLogo} onClick={this.handleClick} style={avatarStyle}/>
                </div >


            </div>
            </MuiThemeProvider>
        );

        return(
            <MuiThemeProvider>
            <AppBar
                style={appbarstyle}
                iconElementLeft={leftButtons}
                iconElementRight={rightContent}
            />
            </MuiThemeProvider>
        );
    }
}

export default HeaderComponent;