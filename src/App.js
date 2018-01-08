import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';
import logo from './logo.svg';

import './App.css';
import HomeComponent from './LoginComponent';

class App extends Component {


  constructor() 
  {
    super();
    // Store the current screen and value from HomeComponent
    this.state = {
        screen: 1,
        submittedValue: ''
    };
  }

   // Called by HomeComponent to change screen
   setScreen = (index, value) =>
    {
    this.setState({
        submittedValue: value,
        screen: index
    });
    }

  render() 
  {

    switch(this.state.screen) 
    {
      case 1:
        return <HomeComponent setScreenFunc={this.setScreen}/>;
    }

  }
}

export default App;
