import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JobsGrid from './JobsGrid'
import JobExt from './JobExt'
const JobsGridExt = () => (
  <Switch>
    <Route exact path='/grid' component={JobsGrid} />
    <Route path='/grid/:url/:ep/:id' render={(props) => <JobExt {...props} />} />
  </Switch>
)
export default JobsGridExt
