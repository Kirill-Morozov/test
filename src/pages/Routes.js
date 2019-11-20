import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from 'pages/Todo/Todo'

const Routes = () => (
  <Switch>
    <Route component={Todo}
           path='/test/:id'
    />
    <Route component={Todo}
           path='*'
    />
  </Switch>
)

export default Routes
