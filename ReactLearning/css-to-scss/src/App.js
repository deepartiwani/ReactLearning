import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './page/Login';
import HomePage from './page/Home';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
