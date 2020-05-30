import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Register from './pages/Register';
import Projects from './pages/Projects';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path='/' exact component={Header} />
        <Route path='/register'component={Register} />
        <Route path='/projects'component={Projects} />
        <Route path='/login' component={Login} />

      </Switch>
    </BrowserRouter>
  )
}