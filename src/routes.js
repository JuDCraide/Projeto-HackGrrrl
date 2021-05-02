import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';

import CompanyDetails from './pages/CompanyDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Redirect to='companies' /></Route>
        <Route exact path='/companies' component={Landing} />
        <Route exact path='/news' component={News} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />

        <Route exact path='/companies/:id' component={CompanyDetails} />
      </Switch>
    </BrowserRouter>
  )
}
