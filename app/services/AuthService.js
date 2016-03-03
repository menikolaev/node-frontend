/**
* Created by mihailnikolaev on 20.12.15.
*/
import request from 'request';
import bluebird from 'bluebird';
import constants from '../constants/AppConstants';

class AuthService {

  login(username, password) {
    console.log('AuthService login executed');
    return new Bluebird((resolve, reject) => {
      request.post(
        {
          url: constants.LOGIN_URL,
          body: { username, password },
          json: true,
        },
        (err, response, body) => {
          if (err) {
            return reject(err);
          }

          if (response.statusCode >= 400) {
            return reject(body);
          }

          return resolve(body);
        }
      );
    });
  }

  signup(username, password, extra) {
    console.log('AuthService signup executed');
    return new Bluebird((resolve, reject) => {
      request.post(
        {
          url: constants.SIGNUP_URL,
          body: { username, password, extra },
          json: true,
        },
        (err, response, body) => {
          if (err) {
            return reject(err);
          }

          if (response.statusCode >= 400) {
            return reject(body);
          }

          return resolve(body);
        }
      );
    });
  }

}

export default new AuthService();
