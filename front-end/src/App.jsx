// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login';

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
