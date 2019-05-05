import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/login';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '@/common/privateRoute';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/" component={App}></PrivateRoute>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);