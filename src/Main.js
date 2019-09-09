import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlRouter from './HtmlRouter';
import GenericGrid from './GenericGrid';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import GenericExt from './GenericExt';
const Main = (grids) => (
  <main style={{ margin: 100 }}>
    <Switch>
      <Route exact path='/' component={HtmlRouter} />
      <Route path='/html' component={HtmlRouter} />
      <Route exact path='/grid/:url/:ep/:id' render={(props) => <GenericExt {...props} />} />
      <Route exact path='/grid/:url/:ep/:id/:menuitem/:idmenu' render={(props) => <GenericExt {...props}  />} />
      <Route exact path='/grid/:id' render={(props) => <GenericGrid  {...props} grids={grids}      key={Math.random()} />} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <Route path='/changepassword' component={ChangePassword} />
    </Switch>
  </main>
)
export default Main
