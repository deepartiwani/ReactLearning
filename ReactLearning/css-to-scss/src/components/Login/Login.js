import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';
import { showToastMessage } from '../toastMessages';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUsername: '',
      inputPassword: '',
    };
  }

    handleToastMessage = (value) => {
      const { showToastMessage } = this.props;
      showToastMessage(value);
    }

    isUsernameValidationOK = (username, password) => {
      const regex = /\s/;
      if ((regex.test(username)) || (regex.test(password))) {
        return true;
      }
      return false;
    }

    isEmailValidationOK = (username) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regex.test(username)) {
        return true;
      }
      return false;
    }

    isPhoneNumberOK = (username) => {
      const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (regex.test(username)) {
        return true;
      }
      return false;
    }

    validationSuccessful = (username, password) => {
      if (this.isEmailValidationOK(username) || this.isPhoneNumberOK(username) || !this.isUsernameValidationOK(username, password)) {
        return true;
      }
      return false;
    }

    clickHandler = () => {
      const { inputUsername, inputPassword } = this.state;
      const baseurl = 'https://dev-bepsy-api.objectedge.com';

      if (this.validationSuccessful(inputUsername, inputPassword)) {
        axios({
          method: 'post',
          url: `${baseurl}/oe_commerce_api/occ/v1/oauth/login`,
          data: {
            'username': inputUsername,
            'password': inputPassword,
          },
          headers: {
            'Authorization': 'Bearer YWRtaW46YWRtaW4=',
            'content-type': 'application/json',
          },
        })
          .then((response) => {
            this.handleToastMessage('Login Successful!');
            showToastMessage();
          }, (error) => {
            console.log(error);
            this.handleToastMessage('Login failed!');
            showToastMessage();
          });
      } else {
        this.handleToastMessage('Validation failed. Please input correct Username!');
        showToastMessage();
      }
    }

    inputChangeHandler = (event) => {
      this.setState({
        [event.target.name]: event.target.value, // updating state variables where [event.target.name] is name attribute of <input> tag
      });
    }

    render() {
      return (
        <div className="modalcontainer">
          <div className="modalwrapper">
            <h2 className="wrapperdiv">Log In</h2>
            <div className="wrapperdiv">
              <div className="labeltext">Username : </div>
              <input className="inputbox" type="text" name="inputUsername" required onChange={this.inputChangeHandler} />
            </div>
            <div className="wrapperdiv">
              <div className="labeltext">Password : </div>
              <input className="inputbox" type="password" name="inputPassword" required onChange={this.inputChangeHandler} />
            </div>
            <div className="wrapperdiv"><button className="submitbutton" type="button" onClick={this.clickHandler}>Submit</button></div>
          </div>
        </div>
      );
    }
}

export default LoginForm;
