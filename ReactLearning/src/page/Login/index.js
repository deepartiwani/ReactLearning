import React, { Component } from 'react';
import LoginForm from '../../components/Login/Login';
import { ToastMessage } from '../../components/toastMessages';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            showToastMessage : ''
        }
    }
    
    handleToastMessage = (value) => {      // this is for changing state variable of parent component to child component
        this.setState({
            showToastMessage: value
        });
    }
    
    render() {  
        return(
            <div class="logindivwrapper">
                <div class="loginformdiv">
                    <LoginForm value={this.state.showToastMessage} showToastMessage={this.handleToastMessage}/>
                    {
                        this.state.showToastMessage ? <ToastMessage message={this.state.showToastMessage}/> : null
                    }
                </div>
                
                <div class="loginpagebannerimg"></div>
            </div>
        );
    }
}

export default Login;