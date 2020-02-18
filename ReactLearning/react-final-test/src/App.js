import React from 'react';
import Login from './components/Login';
import Search from './components/Search';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} />
          {/* <Route path="/pdp" component={PDPPage} /> */}
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
