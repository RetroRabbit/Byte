import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeComponent from './LoginComponent';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeComponent />, document.getElementById('root'));


registerServiceWorker();
