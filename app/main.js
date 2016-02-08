/**
 * Created by mihailnikolaev on 15.12.15.
 */
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin


ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
