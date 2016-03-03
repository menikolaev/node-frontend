/**
* Created by mihailnikolaev on 20.12.15.
*/
import { dispatch, dispatchAsync } from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import AuthService from '../services/AuthService';
import alt from '../alt';

class LoginActionCreators {
  constructor() {}

  loginUser(username, password) {
    let promise = AuthService.login(username, password);
    dispatchAsync(promise, {
      request: ActionTypes.REQUEST_LOGIN_USER,
      success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
      failure: ActionTypes.REQUEST_LOGIN_USER_ERROR,
    }, { username, password });
    console.log('LoginActionCreators loginUser executed');
  }

  signup(username, password, extra) {
    let promise = AuthService.signup(username, password, extra);
    dispatchAsync(promise, {
      request: ActionTypes.REQUEST_LOGIN_USER,
      success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
      failure: ActionTypes.REQUEST_LOGIN_USER_ERROR,
    }, { username, password, extra });
    console.log('LoginActionCreators signup executed');
  }

  logoutUser() {
    dispatch(ActionTypes.LOGOUT_USER);
    console.log('LoginActionCreators loginUser executed');
  }
}

export default new LoginActionCreators();
