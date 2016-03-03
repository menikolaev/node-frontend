/**
* Created by mihailnikolaev on 15.12.15.
*/
import React from 'react';
import mui from 'material-ui';
import AuthenticatedComponent from './../AuthenticatedComponent';

let FlatButton = mui.FlatButton;

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
      Hello from Home Component
      </div>
    );
  }
}

export default Home;
