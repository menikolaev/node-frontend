/**
* Created by mihailnikolaev on 15.12.15.
*/
import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log('Footer constructor executed');
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
    console.log('Footer componentDidMount executed');
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
    console.log('Footer componentWillUnmount executed');
  }

  onChange(state) {
    this.setState(state);
    console.log('Footer onChange executed');
  }

  render() {
    console.log('Footer render executed');
    return (
      <footer>
      <div>
      <span> Это footer</span>
      </div>
      </footer>
    );
  }
}

export default Footer;
