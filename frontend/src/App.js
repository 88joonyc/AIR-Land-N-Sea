import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Switch, Route, useParams } from "react-router-dom";

import * as sessionActions from './store/session'
import LoginFormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import Toys from './pages/ToysPage/ToysPage'
import Bookings from './pages/BookingsPage/BookingPage'
import ToysDetail from './pages/ToysPage/ToysDetail'
// import * as actionImage from './store/images'

function App() {
  // const { toysId } = useParams()
  // console.log('toyId',toysId)
  const dispatch = useDispatch();
  const [ isLoaded, setLoaded ] = useState(false)
  // const images = useSelector((state) => state.images)

  // const imgSet = []
  // images.images.forEach(img => {
  //   if (img.toyId === toysId) return imgSet.push(img)
  // })

  // console.log('imgset',imgSet)

  useEffect(() => {
    // dispatch(actionImage.getImages())
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
        <Route path='/toys/:toyId'>
          <ToysDetail/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
