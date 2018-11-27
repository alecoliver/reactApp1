import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UserList from './UserList/UserList';
import LoginContol from './LoginControl/LoginControl';
import ProtoForm from './Form/ProtoForm';

import Clock from './Clock';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    return (
      <div className="App">
        <Clock  loginState={this.state.isLoggedIn}/>
        <UserList   loginState={this.state.isLoggedIn}/>
        <LoginContol loginState={this.state.isLoggedIn}/>
        <ProtoForm   loginState={this.state.isLoggedIn}/>

      </div>
    );
  }
}

export default App;
