import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import './index.less';
class Footer extends Component{
  render () {
      return (
        <div class="footer">
          <NavLink class="foot" to="/">
            <i>1</i>
            <span>首页</span>
          </NavLink>
          <NavLink class="foot"  to="/classify">
            <i>2</i>
            <span>分类</span>
          </NavLink>
          <NavLink class="foot"  to="/find">
            <i>3</i>
            <span>发现</span>
          </NavLink>
          <NavLink class="foot"  to="/cart">
            <i>4</i>
            <span>购物车</span>
          </NavLink>
          <NavLink class="foot"  to="/center">
            <i>5</i>
            <span>我的</span>
          </NavLink>
        </div>
        
      )
  }
}


export default Footer;
