import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Index from './home'
import About from './about'
import Services from './service'
import Partners from './partners'
import Contact from './contact'
import Nav from './nav'

import './style.css'

function App() {
  return (
    <Router>
      <Nav/>
      <div>
        <Switch>
          <Route exact path='/' component={Index}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/services' component={Services}></Route>
          <Route exact path='/partners' component={Partners}></Route>
          <Route exact path='/contact-us' component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
