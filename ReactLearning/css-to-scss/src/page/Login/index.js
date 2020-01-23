import React, { Component } from 'react';
import LoginForm from '../../components/Login/Login';
import { ToastMessage } from '../../components/toastMessages';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showToastMessage: '',
    };
  }

  handleToastMessage = (value) => { // this is for changing state variable of parent component to child component
    this.setState({
      showToastMessage: value,
    });
  }

  render() {
    return (
      <div className="logindivwrapper">
        <div className="loginformdiv">
          <LoginForm value={this.state.showToastMessage} showToastMessage={this.handleToastMessage} />
          {
            this.state.showToastMessage ? <ToastMessage message={this.state.showToastMessage} /> : null
          }
        </div>

        <div className="loginpagebannerimg" />
      </div>
    );
  }
}

export default Login;
