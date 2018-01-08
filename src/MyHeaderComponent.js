import React from 'react';
import AppBar from 'material-ui/AppBar';
import avatarLogo from './Icon.png';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




const appbarstyle={
  backgroundColor: '#01B9BD',
  height: '103px',
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
marginBotton:'20px',
};

const avatarStyle={
  marginLeft:'10px',
  marginTop:'5px',
  borderColor: '#d6d7da',
  borderWidth:'50px',
  color:'#ffffffs'
};

const rightContent=(
  <div>
   <DropDownMenu>
          <MenuItem value={1} primaryText="Settings" />
          <MenuItem value={1} primaryText="Logout" />
        </DropDownMenu>
  <Avatar  src={avatarLogo} style={avatarStyle}/>
  <Avatar src={avatarLogo} style={avatarStyle}/>
  </div>
  );

const MyHeaderComponent = () => (
    <AppBar
    style={appbarstyle}
     iconElementLeft={leftButtons}
     iconElementRight={rightContent}
  />
);

export default MyHeaderComponent;