/**
 * Created by mihailnikolaev on 15.12.15.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import RequestTypes from './components/student/RequestTypesList';
import Login from './components/Login';
import Account from './components/student/Account';
import StudentRequests from './components/student/SubmittedRequestsList';
import NewRequest from './components/student/NewRequest';
import Files from './components/student/Files';
import FAQ from './components/student/FAQ';
import Instructions from './components/student/Instructions';
import Signup from './components/Signup';


export default (
    <Route component={App} path="/">
        <IndexRoute component={RequestTypes} />
        <Route component={NewRequest}      name="new-request"      path="/new-request/:form_id" />
        <Route component={Account}         name="account"          path="/account" />
        <Route component={StudentRequests} name="student-requests" path="/student-requests" />
        <Route component={Files}           name="files"            path="/files" />
        <Route component={FAQ}             name="faq"              path="/faq" />
        <Route component={Instructions}    name="instructions"     path="/instructions" />
        <Route component={Login}           name='login'            path='/login'  />
        <Route component={Signup}          name='signup'           path='/signup'  />
    </Route>
);
