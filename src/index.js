import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Insert custom made components

import Settings from './components/settings';

ReactDOM.render(< Settings />, document.getElementById('root'));

registerServiceWorker();
