import React from 'react';
import logo from '../images/logo.png';
import '../styles/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <img src={logo} alt="" className="nav__logo" />
        <div className="nav__description">Decrypt Stats</div>
      </div>
    </div>
  );
}

export default Nav;
