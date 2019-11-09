import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Test from 'pages/Test/Test'

const Routes = () => (
  <Switch>
    <Route component={Test}
           exact
           path={'/test'}
    />
    <Route component={Test}
           path='*'
    />
  </Switch>
)

export default Routes
