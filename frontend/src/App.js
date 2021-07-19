import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import * as sessionActions from './store/session'
import LoginFormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import Toys from './pages/ToysPage'
import Bookings from './pages/BookingPage'

function App() {

  const dispatch = useDispatch();
  const [ isLoaded, setLoaded ] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true))
  }, [dispatch])


  return (
    <>
      <Navigation isLoaded={isLoaded}></Navigation>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <LoginFormPage/>
        </Route>
        <Route path='/sign-up'>
          <SignUpFormPage/>
        </Route>
        <Route path='/toys'>
          <Toys/>
        </Route>
        <Route path='/bookings'>
          <Bookings/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
