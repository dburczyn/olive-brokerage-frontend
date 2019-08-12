import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JobsGrid from './JobsGrid'
import JobExt from './JobExt'

// The Roster component matches one of two different routes
// depending on the full pathname
const JobsGridExt = () => (
  <Switch>
    <Route exact path='/grid' component={JobsGrid}/>
    <Route path='/grid/:number'   render={(props) => <JobExt {...props}      />}/>
  </Switch>
)


export default JobsGridExt
