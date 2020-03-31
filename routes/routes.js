import React from 'react'
import { Route, Switch } from 'react-router-dom';
import One from '../views/one/index.jsx';
import Two from '../views/two/index.jsx';
const routes = () => (
    <Switch>
      <Route exact  path='/' component={One} />
      <Route path='/two' component={Two} />
    </Switch>
  )
  export default routes;