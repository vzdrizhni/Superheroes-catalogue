import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import HeroesList from '../heroes-list/heroes-list';
import Hero from '../heroes/hero';
import Header from '../header/header';

const App = () => (
  <Router>
    <div className="App">
      <Link to="/Superheroes-catalogue/"><Header /></Link>
      <Switch>
        <Route exact path="/Superheroes-catalogue/" component={HeroesList} />
        <Route path="/Superheroes-catalogue/:id" component={Hero} />
      </Switch>
    </div>
  </Router>
);

export default App;
