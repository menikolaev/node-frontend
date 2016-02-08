/**
 * Created by mihailnikolaev on 20.12.15.
 */
import React from 'react';
import { Router, Route, Link } from 'react-router'
import AccountStore from '../stores/AccountStore';

let menuItems = [
    { route: 'home', text: 'Главная' },
    { route: 'account', text: 'Личная информация' },
    { route: 'student-requests', text: 'Мои заявки' },
    { route: 'files', text: 'Мои файлы' },
    { route: 'faq', text: 'F.A.Q.' },
    { route: 'instructions', text: 'Инструкция' }
];

class Navbar extends React.Component {
    constructor() {
        super();
        console.log('Navbar constructor executed');
    }

    render() {
        console.log('Navbar render executed');
        let account = AccountStore.getState();
        return (
            <nav className="navbar">
              <Link to='/home'>Home</Link>
              <span>{account.name} {account.surname}</span>
              {this.props.children}
              <Link to='#'>Logout</Link>
            </nav>
        );
    }
}

Navbar.contextTypes = {
    muiTheme: React.PropTypes.object,
};

export default Navbar;
