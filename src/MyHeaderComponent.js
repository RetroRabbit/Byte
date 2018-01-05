import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';

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
<FlatButton label="New Chat" style={buttonstyle} />
<FlatButton label="New Group" style={buttonstyle} />
</div>
);



const rightContent=(
  <div>
  <Avatar style={{color:'red',}} >A</Avatar>
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