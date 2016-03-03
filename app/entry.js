/**
 * Created by mihailnikolaev on 15.12.15.
 */
import jQuery from 'jquery';
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();

window.$ = jQuery;

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
