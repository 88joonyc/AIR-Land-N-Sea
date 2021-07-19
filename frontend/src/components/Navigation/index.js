// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='nav-button-container'>
            <NavLink className='navi-button' to="/login">Log In</NavLink>
            <NavLink className='navi-button' to="/sign-up">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
      <div className='navi-container'>
        <ul >
            <li className='navigation-links'>
                <NavLink className='home-container' activeClassName='home-active' exact to="/">
                  {
                    <img
                      className='home-img'
                      alt='user'
                      src='data:image/png;base64,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'/>
                    }</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
      </div>
  );
}

export default Navigation;
