import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Html from './Html'
const HtmlRouter = (htmlpages) => (
  <Switch>
    <Route exact path='/' render={(props) => <Html {...props} htmlpages={htmlpages} key={Math.random()} />} />
    <Route path='/html/:id' render={(props) => <Html {...props} htmlpages={htmlpages} key={Math.random()} />} />
  </Switch>
)
export default HtmlRouter
