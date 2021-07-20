import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import * as sessionActions from './store/session'
import LoginFormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import Toys from './pages/ToysPage/ToysPage'
import Bookings from './pages/BookingsPage/BookingPage'
import ToysDetail from './pages/ToysPage/ToysDetail'
import EditToys from "./pages/UsersToy/UsersToy";

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
        <Route exact path='/toys'>
          <Toys/>
        </Route>
        <Route path='/bookings'>
          <Bookings/>
        </Route>
        <Route exact path='/toys/:toyId'>
          <ToysDetail/>
        </Route>
        <Route path='/edit'>
          <EditToys/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
