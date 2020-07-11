import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Beauty } from './components/Beauty';
import { Food } from './components/Food';
import { Life } from './components/Life';

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"       component={ () => <Beauty qid="1" /> } />
        <Route exact path="/beauty" component={ () => <Beauty qid="2" /> } />
        <Route exact path="/food"   component={ () => <Food   qid="3" /> } />
        <Route exact path="/life"   component={ () => <Life   qid="4" /> } />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}
