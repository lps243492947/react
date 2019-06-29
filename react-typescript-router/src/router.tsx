import * as React from 'react';
import { Route, HashRouter, Switch, Router } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage} from './components';

export const AppRouter:React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/" component={About} />
          <Route path="/" component={MembersPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}