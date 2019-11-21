import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const navbar = () => (
  <div>
    <ul className="navbar">
      <li className="navbarlist"><Link to="/home"> Home</Link></li>
      <li className="navbarlist"><Link to="/login"> Login</Link></li>
    </ul>
  </div>
);
export default navbar;
