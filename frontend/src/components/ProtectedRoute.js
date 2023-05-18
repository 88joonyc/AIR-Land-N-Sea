import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import NavBar from '../NavBar/NavBar';
import Navigation from './Navigation';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
      {/* <Navigation/> */}

      {(user)? props.children  : <Redirect to='/login' />}
    </Route>
  )
};


export default ProtectedRoute;
