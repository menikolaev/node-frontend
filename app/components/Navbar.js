/**
 * Created by mihailnikolaev on 20.12.15.
 */
import React from 'react';
import { Router, Route, Link } from 'react-router'
import {Toolbar, ToolbarGroup, FontIcon, ToolbarTitle, LeftNav, FlatButton} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
        this._getSelectedIndex = this._getSelectedIndex.bind(this);
        this._onLeftNavChange = this._onLeftNavChange.bind(this);
        this._handleMenu = this._handleMenu.bind(this);
        console.log('Navbar constructor executed');
    }

    _handleMenu(e) {
        e.preventDefault();
        this.refs.leftNav.toggle();
        console.log('Navbar _handleMenu executed');
    }

    _onLeftNavChange(e, key, payload) {
        // Do DOM Diff refresh
        this.props.history.pushState(null, payload.route);
        console.log('Navbar _onLeftNavChange executed');
    }

    _getSelectedIndex() {
        let currentItem;

        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.props.history.isActive(currentItem.route, {})) {
                return i;
            }
        }
        console.log('Navbar _getSelectedIndex executed');
    }

    render() {
        console.log('Navbar render executed');
        return (
            <header>
                <LeftNav ref="leftNav"
                         docked={false}
                         menuItems={menuItems}
                         selectedIndex={this._getSelectedIndex()}
                         onChange={this._onLeftNavChange} />
                <Toolbar>
                    <ToolbarGroup key={0} float="left">
                        <FlatButton secondary={true} onTouchTap={this._handleMenu}>
                            <FontIcon className="material-icons md-36" tooltip="Меню">view_headline</FontIcon>
                        </FlatButton>
                    </ToolbarGroup>
                    <ToolbarGroup key={1} float="left">
                        <ToolbarTitle text="Студент" />
                    </ToolbarGroup>
                    <ToolbarGroup key={2} float="right">
                        <FlatButton secondary={true}>
                            <FontIcon className="material-icons md-36" tooltip="Выход">input</FontIcon>
                        </FlatButton>
                    </ToolbarGroup>
                    <ToolbarGroup key={3} float="right">
                        <ToolbarTitle text="Name Surn." />
                    </ToolbarGroup>
                </Toolbar>
                {this.props.children}
            </header>
        );
    }
}

Navbar.contextTypes = {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
};

export default Navbar;