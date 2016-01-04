/**
 * Created by mihailnikolaev on 20.12.15.
 */
import React from 'react';
import LoginStore from '../stores/LoginStore';
import LoginActionCreators from '../actions/LoginActionCreators';
import RouterActionCreators from '../actions/RouterActionCreators';

/**
 * Exports a higher-order component that connects the component to the LoginStore.
 * This higher-order component is most easily used as an ES7 decorator.
 * Decorators are just a syntax sugar over wrapping class in a function call.
 */
export default (ComposedComponent) => {
    return class AuthenticatedComponent extends React.Component {

        static willTransitionTo(transition) {

            console.log('&*&*&* willTransitionTo for authenticated page. Next transition path:', transition.path, 'logged in:', LoginStore.isLoggedIn());

            if (!LoginStore.isLoggedIn()) {

                let transitionPath = transition.path;

                //store next path in RouterStore for redirecting after authentication
                //as opposed to storing in the router itself with:
                // transition.redirect('/login', {}, {'nextPath' : transition.path});
                RouterActionCreators.storeRouterTransitionPath(transitionPath);

                //go to login page
                transition.redirect('/login');
            }
        }

        constructor() {
            super();
            this.state = this._getLoginState();
            console.log('AuthenticatedComponent constructor executed');
        }

        _getLoginState() {
            console.log('AuthenticatedComponent _getLoginState executed');
            return {
                userLoggedIn: LoginStore.isLoggedIn(),
                user: LoginStore.user,
                jwt: LoginStore.jwt
            };
        }

        componentDidMount() {
            this.changeListener = this._onChange.bind(this);
            LoginStore.addChangeListener(this.changeListener);
            console.log('AuthenticatedComponent componentDidMount executed');
        }

        _onChange() {
            this.setState(this._getLoginState());
            console.log('AuthenticatedComponent _onChange executed');
        }

        componentWillUnmount() {
            LoginStore.removeChangeListener(this.changeListener);
            console.log('AuthenticatedComponent componentWillUnmount executed');
        }

        render() {
            console.log('AuthenticatedComponent render executed');
            return (
                <ComposedComponent
                    {...this.props}
                    user={this.state.user}
                    jwt={this.state.jwt}
                    userLoggedIn={this.state.userLoggedIn} />
            );
        }
    }
};