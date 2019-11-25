import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';
import { connect } from 'react-redux';
import { showToastMessage } from '../toastMessages';
import loginAction from '../../actions/loginAction';

class LoginForm extends Component {
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

  loginAPICall = () => {
    const baseurl = 'https://dev-bepsy-api.objectedge.com';
    axios({
      method: 'post',
      url: `${baseurl}/oe_commerce_api/occ/v1/oauth/login`,
      data: {
        'username': this.username.value,
        'password': this.password.value,
      },
      headers: {
        'Authorization': 'Bearer YWRtaW46YWRtaW4=',
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
        this.handleToastMessage('Login Successful!');
        showToastMessage();
        this.getProfileDetails(response, baseurl);
      }, (error) => {
        console.log(error);
        this.handleToastMessage('Login failed!');
        showToastMessage();
      });
  }

  getProfileDetails = (loginresponse, baseurl) => {
    axios({
      method: 'get',
      url: `${baseurl}/oe_commerce_api/occ/v1/profiles/current`,
      headers: {
        'Authorization': `Bearer ${loginresponse.data.access_token}`,
        'content-type': 'application/json',
      },
      params: {
        'profileId': loginresponse.data.id,
      },
    })
      .then((response) => {
        console.log(response);
        const name = `${response.data.profile_user.firstName}`;
        const userDetails = {
          name: name,
        };
        this.props.credentials(userDetails);
      }, (error) => {
        console.log(error);
      });
  }

  clickHandler = () => {
    if (this.validationSuccessful(this.inputUsername, this.inputPassword)) {
      this.loginAPICall();
    } else {
      this.handleToastMessage('Validation failed. Please input correct Username!');
      showToastMessage();
    }
  }

  render() {
    return (
      <div className="modalcontainer">
        <div className="modalwrapper">
          <h2 className="wrapperdiv">Log In</h2>
          <div className="wrapperdiv">
            <div className="labeltext">Username : </div>
            <input className="inputbox" type="text" ref={(usernameref) => { this.username = usernameref; }} required />
          </div>
          <div className="wrapperdiv">
            <div className="labeltext">Password : </div>
            <input className="inputbox" type="password" ref={(passwordref) => { this.password = passwordref; }} required />
          </div>
          <div className="wrapperdiv"><button className="submitbutton" type="button" onClick={this.clickHandler}>Submit</button></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logindata: state.logindata,
});

const mapDispatchToProps = (dispatch) => ({
  credentials: (userdata) => {
    dispatch(loginAction(userdata));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
