import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlRouter from './HtmlRouter';
import GenericGrid from './GenericGrid';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Registered from './Registered';
import Activated from './Activated';
import Changed from './Changed';
import EmailSent from './EmailSent';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import GenericExt from './GenericExt';
import ToolboxLayout from './MsControler';
import config from './config';
const Main = (passedprops) => (
  <main style={{ margin: (config.styles.header) ? (config.styles.header.height + 40) : 150 }}>
    <Switch>
      {/* <Route exact path='/' render={(props) => <HtmlRouter  {...props} htmlpages={passedprops.htmlpages} key={Math.random()} />} /> */}
      <Route exact path='/' component={ToolboxLayout} />
      <Route path='/html' render={(props) => <HtmlRouter  {...props} htmlpages={passedprops.htmlpages} key={Math.random()} />} />
      <Route exact path='/grid/:url/:ep/:id' render={(props) => <GenericExt {...props} grids={passedprops.grids} key={Math.random()} />} />
      <Route exact path='/grid/:url/:ep/:id/:menuitem/:idmenu' render={(props) => <GenericExt {...props} grids={passedprops.grids} key={Math.random()}/>} />
      <Route exact path='/grid/:id' render={(props) => <GenericGrid  {...props} grids={passedprops.grids} key={Math.random()} />} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/registered' component={Registered} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <Route path='/changepassword' component={ChangePassword} />
      <Route path='/activated' component={Activated} />
      <Route path='/changed' component={Changed} />
      <Route path='/emailsent' component={EmailSent} />
    </Switch>
  </main>
)
export default Main
