import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from '.components/Login';
import Dashboard from './components/Dashboard';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" login component={Login} />
      <Route exact path="/dashboard" login component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;