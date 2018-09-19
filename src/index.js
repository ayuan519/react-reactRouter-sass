import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.css';
import './index.scss';
import './static/js/flexible';
import './public';
import Router from './routers/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
