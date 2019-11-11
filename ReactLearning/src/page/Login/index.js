import React, { Component } from 'react';
import LoginForm from '../../components/Login/Login';
import ToastMessage from '../../components/ToastMessages/ToastMessage';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            showToastmessage : ''
        }
        this.handleToastmessage = this.handleToastmessage.bind(this);   // this is for changing state variable of parent component to child component
    }
    handleToastmessage = (value) => {
        this.setState({
            showToastmessage: value
        });
    }
    
    render() {  
        return(
            <div class="logindivwrapper">
                <div class="loginformdiv">
                    <LoginForm value={this.state.showToastmessage} showToastmessage={this.handleToastmessage}/>
                    {
                        this.state.showToastmessage ? <ToastMessage message={this.state.showToastmessage}/> : null
                    }
                </div>
                
                <div class="loginpagebannerimg"></div>
            </div>
        );
    }
}

export default Login;