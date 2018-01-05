import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyHeaderComponent from './MyHeaderComponent';

const App = () => (
  <MuiThemeProvider>
    <MyHeaderComponent />
  </MuiThemeProvider>
);

export default App;