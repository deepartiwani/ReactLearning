/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import LoginForm from '../../components/Login/Login';
import { ToastMessage } from '../../components/toastMessages';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            showToastMessage : ''
        };
    }
    
    handleToastMessage = (value) => {      // this is for changing state variable of parent component to child component
        this.setState({
            showToastMessage: value
        });
    }
    
    render() { 
        const { showtoastmessage } = this.state; 
        return(
            <div className="logindivwrapper">
                <div className="loginformdiv">
                    <LoginForm value={showtoastmessage} showToastMessage={this.handleToastMessage}/>
                    {
                        showtoastmessage ? <ToastMessage message={showtoastmessage}/> : null
                    }
                </div>
                
                <div className="loginpagebannerimg" />
            </div>
        );
    }
}

export default Login;