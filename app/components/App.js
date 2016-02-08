/**
 * Created by mihailnikolaev on 15.12.15.
 */

import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import LoginStore from '../stores/LoginStore';
import RouterStore from '../stores/RouterStore';
import LoginActionCreators from '../actions/LoginActionCreators';
import { Route, Link } from 'react-router';
import mui, {Styles} from 'material-ui';
import AuthenticatedComponent from './AuthenticatedComponent';

// Get mui Components
const ThemeManager = Styles.ThemeManager;
const DefaultRawTheme = Styles.LightRawTheme;

class App extends React.Component {
    constructor() {
        super();
        this.state = this._getLoginState();
        console.log('App constructor executed');
    }

    static get childContextTypes() {
        console.log('App childContextTypes executed');
        return { muiTheme: React.PropTypes.object };
    }

    getChildContext() {
        console.log('App getChildContext executed');
        return {
            muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)
        };
    }

    render() {
        console.log('App render executed');
        return (
            <div>
            <Navbar history={this.props.history}>
              <ul>
                <li><Link to="/account">Личная информация</Link></li>
                <li><Link to="/student-requests">Мои заявки</Link></li>
                <li><Link to="/files">Мои файлы</Link></li>
                <li><Link to="/faq">F.A.Q.</Link></li>
                <li><Link to="/instructions">Инструкция</Link></li>
              </ul>
            </Navbar>
            <main>
                {this.props.children}
            </main>
            <Footer />
            </div>
        );
    }

    _getLoginState() {
        console.log('App _getLoginState executed');
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        };
    }

    componentDidMount() {
        //register change listener with LoginStore
        this.changeListener = this._onLoginChange.bind(this);
        LoginStore.addChangeListener(this.changeListener);
        console.log('App componentDidMount executed');
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this.changeListener);
        console.log('App componentWillUnmount executed');
    }

    logout(e) {
        e.preventDefault();
        LoginActionCreators.logoutUser();
        console.log('App logout executed');
    }

    /*
     This event handler deals with all code-initiated routing transitions
     when logging in or logging out
     */
    _onLoginChange() {
        //get a local up-to-date record of the logged-in state
        //see https://facebook.github.io/react/docs/component-api.html
        let userLoggedInState = this._getLoginState();
        this.setState(userLoggedInState);

        //get any nextTransitionPath - NB it can only be got once then it self-nullifies
        let transitionPath = RouterStore.nextTransitionPath || '/';

        //trigger router change
        console.log("&*&*&* App onLoginChange event: loggedIn=", userLoggedInState.userLoggedIn,
            "nextTransitionPath=", transitionPath);

        if(userLoggedInState.userLoggedIn){
            router.transitionTo(transitionPath);
        }else{
            router.transitionTo('/login');
        }
        console.log('App _onLoginChange executed');
    }
}


App.contextTypes = {
    location: React.PropTypes.object,
    history: React.PropTypes.object
};

App.propTypes = {
    history: React.PropTypes.object,
    router: React.PropTypes.func
};

export default AuthenticatedComponent(App);
