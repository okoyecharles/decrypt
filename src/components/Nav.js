import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../images/logo.png';
import { removeNavBack } from '../redux/actions';
import '../styles/Nav.css';

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details);

  return (
    <div className="nav">
      <div className="nav__container">
        <img src={logo} alt="" className="nav__logo" />
        <div className="nav__description">{!details.nav_active ? 'Decrypt Stats' : 'Decrypt Details'}</div>
        {details.nav_active && (
          <MdArrowBackIosNew
            className="nav__back"
            onClick={() => {
              navigate('/');
              dispatch(removeNavBack());
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Nav;
