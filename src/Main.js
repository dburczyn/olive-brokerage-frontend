import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import JobsGridExt from './JobsGridExt';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';




const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/grid' component={JobsGridExt}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/forgotpassword' component={ForgotPassword}/>
      <Route path='/changepassword' component={ChangePassword}/>
    </Switch>
  </main>
)

export default Main
