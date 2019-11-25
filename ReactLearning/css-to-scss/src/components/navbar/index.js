/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { connect } from 'react-redux';
import logoutAction from '../../actions/logoutAction';

const navbar = (props) => (
  <div>
    <ul className="navbar">
      <li className="navbarlist"><Link to="/home"> Home</Link></li>
      <li className="navbarlist"><Link to="/login"> Login</Link></li>
      <li className="navbarlist"><Link to="/plp"> Product Listing</Link></li>
      <li className="navbarlist"><Link to="/search"> Search Product Listing</Link></li>
      {
        (props.logindata.userdata) ? <li className="navbarlist userdetails"> Hello {props.logindata.userdata.name}<button type="button" onClick={props.logout}> (Logout) </button></li> : null
      }
    </ul>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

const mapStateToProps = (state) => ({
  logindata: state.logindata,
});

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
