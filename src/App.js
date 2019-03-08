import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  HashRouter, Route,  Switch } from 'react-router-dom';
import Button from 'antd/lib/button';
import Home from '@/views/Home/';
import Login from '@/views/Login/';
import Details from '@/views/Details/';
import Register from '@/views/Register/';
import MoreGoods from '@/views/MoreGoods/';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/details" component={Details}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/moregoods" component={MoreGoods}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
