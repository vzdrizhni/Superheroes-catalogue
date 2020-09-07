import React from 'react'
import HeroesList from "../heroes-list/heroes-list";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hero from '../heroes/hero'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <HeroesList/> */}
          <Route exact path='/' component={HeroesList} />
          <Route path='/:id' component={Hero} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;