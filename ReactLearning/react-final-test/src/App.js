import React from 'react';
import Login from './components/Login';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} exact />
          <Route path="/search" component={Search} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
 