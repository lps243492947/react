import React from 'react';
import work from './work/work';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/work" component={work} />
        <Redirect from="/" to="/work" />
      </Switch>
    </Router>
  );
}

export default App;
