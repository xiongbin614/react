import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  HashRouter, Route,  Switch } from 'react-router-dom';
import Home from '@/views/Home/';
import Login from '@/views/Login/';
import Details from '@/views/Details/';
import Register from '@/views/Register/';
import MoreGoods from '@/views/MoreGoods/';
import { Provider } from 'react-redux';
import store from '@/store/xb/index.js'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route path="/details" component={Details}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/moregoods" component={MoreGoods}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </HashRouter>
      </Provider>
    );
  }
}

export default App;
