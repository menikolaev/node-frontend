/**
* Created by mihailnikolaev on 20.12.15.
*/
import alt from '../alt';
import BaseStore from './BaseStore';
import ActionTypes from '../constants/ActionTypes';
import jwtDecode from 'jwt-decode';

class LoginStore extends BaseStore {

  constructor() {
    super();

    this.subscribe(() => this._registerToActions.bind(this));
    this._user = null;
    this._error = null;
    this._jwt = null;

    //attempt auto-login
    console.log('&*&*&*& attempting auto-login in LoginStore');
    this._autoLogin();
  }

  _registerToActions(action) {
    switch (action.type) {

      case ActionTypes.REQUEST_LOGIN_USER_SUCCESS:
        this._jwt = action.body.idToken;

        //localStorage.setItem("jv_jwt", this._jwt);
        this._user = jwtDecode(this._jwt);
        this._error = null;
        this.emitChange();
      break;

      case ActionTypes.REQUEST_LOGIN_USER_ERROR:
        this._error = action.error;
        this.emitChange();
      break;

      case ActionTypes.LOGOUT_USER:
        this._user = null;
        this._error = null;
        this._jwt = null;

        //localStorage.setItem("jv_jwt", "");
        this.emitChange();
      break;

      default:
      break;
    }
    console.log('LoginStore _registerToAction executed');
  }

  _autoLogin () {
    //let jwt = localStorage.getItem("jv_jwt");
    //if (jwt) {
    //    this._jwt = jwt;
    //    this._user = jwt_decode(this._jwt);
    //    console.log("&*&*&* autologin success")
    //}
    console.log('LoginStore _autoLogin executed');
  }

  get user() {
    console.log('LoginStore "user" executed');
    return this._user;

  }

  get error() {
    console.log('LoginStore "error" executed');
    return this._error;
  }

  get jwt() {
    console.log('LoginStore "jwt" executed');
    return this._jwt;
  }

  isLoggedIn() {
    console.log('LoginStore "isLoggedIn" executed');
    return !!this._user;
  }
}

export default new LoginStore();
