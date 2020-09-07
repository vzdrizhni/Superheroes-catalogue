import React from 'react'
import HeroesList from "../heroes-list/heroes-list";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Hero from '../heroes/hero'
import Header from "../header/header";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Link to='/'><Header /></Link>
        <Switch>
          <Route exact path='/' component={HeroesList} />
          <Route path='/:id' component={Hero} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;