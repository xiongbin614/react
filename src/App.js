import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  HashRouter, Route,  Switch } from 'react-router-dom';
import Home from '@/views/Home/';
import Login from '@/views/Login/';
import Details from '@/views/Details/';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/details" component={Details}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
