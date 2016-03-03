/**
* Created by mihailnikolaev on 20.12.15.
*/
import React from 'react';
import { Router, Route, Link } from 'react-router';
import AccountStore from '../stores/AccountStore';

import styles from './Navbar.css';

console.log(styles);

class Navbar extends React.Component {
  constructor() {
    super();
    console.log('Navbar constructor executed');
  }

  render() {
    console.log('Navbar render executed');
    let account = AccountStore.getState();
    return (
      <nav className={styles.nav}>
      <div className={styles.menu}>
      {this.props.children}
      </div>
      </nav>
    );
  }
}

Navbar.contextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Navbar;
