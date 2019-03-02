import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import './index.css';
class Footer extends Component{
  render () {
      return (
        <div class="footer">
          <NavLink activeClassName="abcd" to="/">
          <div class="foot">
            <i>1</i>
            <span>首页</span>
          </div>
          </NavLink>
          <NavLink activeClassName="abcd" to="/classify">

          <div class="foot">
            <i>2</i>
            <span>分类</span>
          </div>
          </NavLink>
              <NavLink activeClassName="abcd" to="/find">

          <div class="foot">
            <i>3</i>
            <span>发现</span>
          </div>
          </NavLink>
                <NavLink activeClassName="abcd" to="/cart">

          <div class="foot">
            <i>4</i>
            <span>购物车</span>
          </div>
          </NavLink>
                  <NavLink activeClassName="abcd" to="/center">

          <div class="foot">
            <i>5</i>
            <span>我的</span>
          </div>
          </NavLink>
        </div>
        
      )
  }
}


export default Footer;
