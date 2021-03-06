import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import * as serviceWorker from './serviceWorker';

window.RCRE.setDefaultLoadMode('nativeads');

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

window.React = React;
window.ReactDOM = ReactDOM;
