/**
 * Created by mihailnikolaev on 20.12.15.
 */
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import LoginActionCreators from '../actions/LoginActionCreators';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
        console.log('Login constructor executed');
    }

    //action
    login(e) {
        e.preventDefault();
        LoginActionCreators.loginUser(this.state.user, this.state.password);
        console.log('Login "login" executed with e=', e);
    }

    render() {
        console.log('Login render executed');
        return (
            <div className="login jumbotron center-block">
                <h1>Login</h1>
                <form role="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
                </form>
            </div>
        );
    }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);