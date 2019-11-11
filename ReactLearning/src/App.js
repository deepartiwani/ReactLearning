import React, { Component } from 'react';
import './App.css';
import LoginPage from './page/Login/index';
import HomePage from './page/Home/index';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
        <HomePage />
     </div>
    );
  }
}
export default App;
