import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlExt from './HtmlExt';
import GenericGrid from './GenericGrid'
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import GenericExt from './GenericExt';
import ClippedDrawer from './ProjectMenu';
const Main = () => (
  <main style={{ margin: 100 }}>
    <Switch>
      <Route exact path='/' component={HtmlExt} />
      <Route path='/html' component={HtmlExt} />
      <Route exact path='/grid/:url/:ep/:id' render={(props) => <GenericExt {...props} />} />
      <Route exact path='/grid/:url/:ep/:id/:menuitem/:idmenu' render={(props) => <GenericExt {...props} key={Math.random()} />} />
      <Route exact path='/grid/:urlname' render={(props) => <GenericGrid  {...props} key={Math.random()} />} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <Route path='/changepassword' component={ChangePassword} />
      <Route path='/testmenu' component={ClippedDrawer} />
    </Switch>
  </main>
)
export default Main
