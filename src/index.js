import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import './bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>    
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
