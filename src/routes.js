import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import News from './pages/News';
// import Search from './pages/Search';
import About from './pages/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Redirect to='landing' /></Route>
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/news' component={News} />
        {/* <Route exact path='/search' component={Search} /> */}
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}
