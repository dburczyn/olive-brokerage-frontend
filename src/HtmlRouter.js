import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Html from './Html'
const HtmlRouter = () => (
  <Switch>
    <Route exact path='/' component={Html} />
    <Route path='/html/:id' render={(props) => <Html {...props} key={Math.random()} />} />
  </Switch>
)
export default HtmlRouter
