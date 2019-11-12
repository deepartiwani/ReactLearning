import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import { showToastMessage } from '../toastMessages';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          inputUsername : '',
          inputPassword : ''
        }
    }

    handleToastMessage = (value) => {
        this.props.showToastMessage(value);
    }

    isUsernameValidationOK = (username,password) => {
        let regex =/\s/;
        if ((regex.test(username)) || (regex.test(password))) {
          return true;
        }
        return false;
    }
    
    isEmailValidationOK = (username) => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(username)) {
          return true;
        }
        return false;
    }
    
    isPhoneNumberOK = (username) => {
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (regex.test(username)) {
          return true;
        }
        return false;
    }
    
    validationSuccessful = (username,password) => {
        if(this.isEmailValidationOK(username) || this.isPhoneNumberOK(username) || !this.isUsernameValidationOK(username,password)){
          return true;
        }
        return false;
    }
    
    clickHandler = () => {
        const username = this.state.inputUsername, 
              password = this.state.inputPassword,
              baseurl = "https://dev-bepsy-api.objectedge.com";

        if (this.validationSuccessful(username,password)) {
            axios({
            method: 'post',
            url: baseurl + '/oe_commerce_api/occ/v1/oauth/login',
            data: {
                "username": this.state.inputUsername, //'trupti.kashid@objectedge.com',//
                "password": this.state.inputPassword //'Objectedge$10'
            },
            headers : { 
                "Authorization":"Bearer YWRtaW46YWRtaW4=",
                "content-type":"application/json"
            }
            })
            .then((response) => {
                this.handleToastMessage("Login Successful!");
                showToastMessage();
        
            }, (error) => {
                console.log(error);
                this.handleToastMessage("Login failed!");
                showToastMessage();
            });
        }
        else {
            this.handleToastMessage("Validation failed. Please input correct Username!");
            showToastMessage();
        }
    }
    
    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value          // updating state variables where [event.target.name] is name attribute of <input> tag 
        })
    }

    render() {
        return(
            <div className="modalcontainer">
                <div class="modalwrapper">
                    <h2 class="wrapperdiv">Log In</h2>
                    <div class="wrapperdiv">
                        <div class="labeltext">Username : </div>
                        <input class="inputbox" type= "text" name="inputUsername" required onChange={this.inputChangeHandler}></input>
                    </div>
                    <div class="wrapperdiv">
                        <div class="labeltext">Password : </div>
                        <input class="inputbox" type= "password" name="inputPassword" required onChange={this.inputChangeHandler}></input>
                    </div>
                    <div class="wrapperdiv"><button class="submitbutton" onClick={this.clickHandler}>Submit</button></div>
                </div>
            </div>
        )
    }
}

export default LoginForm; 