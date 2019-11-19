import React, { Component } from 'react';
import './App.css';
import LoginPage from './page/Login';
import HomePage from './page/Home';

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
