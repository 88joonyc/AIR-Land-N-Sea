import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import * as sessionActions from './store/session'
import LoginFormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/SignUpFormPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Home from "./pages/HomePage/HomePage";
import Toys from './pages/ToysPage/ToysPage'
import ToysDetail from './pages/ToysPage/ToysDetail'
import EditToys from "./pages/UsersToy/UsersToy";
import Hosting from "./pages/HostPage/HostPage";
import AddImages from "./pages/ImagePage/ImagePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import FooterBar from "./components/Footer/Footer";
import About from "./pages/About/About";

function App() {
  const dispatch = useDispatch();
  const [ isLoaded, setLoaded ] = useState(false)

  const history = useHistory()

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true))
  }, [dispatch])

  if (isLoaded === false) {
    // history.push('/login')
    // history.go(0)
  }

  return (
    <>
      <Navigation/>
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
        <ProtectedRoute exact path='/toys'>
          <Toys/>
        </ProtectedRoute>
        <ProtectedRoute path='/hosting'>
          <Hosting/>
        </ProtectedRoute>
        <ProtectedRoute path='/toys/:toyId'>
          <ToysDetail/>
        </ProtectedRoute>
        {/* <ProtectedRoute path='/toy/edit'>
          {isLoaded && <EditToys/>}
        </ProtectedRoute> */}
        <Route path='/about'>
          {<About/>}
        </Route>
        <ProtectedRoute path='/images/:toyId'>
          <AddImages props/>
        </ProtectedRoute>
        <ProtectedRoute path='/user/:userId'>
          {isLoaded &&  <UsersPage/>}
        </ProtectedRoute>
      </Switch>
      <FooterBar/>
    </>
  );
}

export default App;
