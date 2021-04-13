import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
        <Route path="/" name="Home" render={props => <MainLayout {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
