import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ChatComponent from "./ChatComponent";
import LoginComponent from "./LoginComponent";
import HeaderComponent from "./HeaderComponent";


ReactDOM.render(<LoginComponent />, document.getElementById('side'));
ReactDOM.render(<ChatComponent />, document.getElementById('main'));
ReactDOM.render(<HeaderComponent />, document.getElementById('header'));




registerServiceWorker();
