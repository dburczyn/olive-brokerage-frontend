import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlRouter from './HtmlRouter';
import GenericGrid from './GenericGrid';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import GenericExt from './GenericExt';
const Main = (passedprops) => (
  <main style={{ margin: 100 }}>
    <Switch>
      <Route exact path='/' render={(props) => <HtmlRouter  {...props} htmlpages={passedprops.htmlpages}      key={Math.random()} />} />
      <Route path='/html' render={(props) => <HtmlRouter  {...props} htmlpages={passedprops.htmlpages}      key={Math.random()} />} />
      <Route exact path='/grid/:url/:ep/:id' render={(props) => <GenericExt {...props} />} />
      <Route exact path='/grid/:url/:ep/:id/:menuitem/:idmenu' render={(props) => <GenericExt {...props}  />} />
      <Route exact path='/grid/:id' render={(props) => <GenericGrid  {...props} grids={passedprops.grids}      key={Math.random()} />} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <Route path='/changepassword' component={ChangePassword} />
    </Switch>
  </main>
)
export default Main
