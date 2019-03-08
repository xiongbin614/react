import React, { Component } from 'react';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './index.less';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink className="foot" to="/index">
          <i className="iconfont icon-shouye"></i>
          <span>首页</span>
        </NavLink>
        <NavLink className="foot" to="/classify">
          <i className='iconfont icon-category'></i>
          <span>分类</span>
        </NavLink>
        <NavLink className="foot" to="/find">
          <i className='iconfont icon-faxian'></i>
          <span>发现</span>
        </NavLink>
        <NavLink className="foot" to="/cart">
          <i className='iconfont icon-gouwuchekong'></i>
          <span>购物车</span>
        </NavLink>
        <NavLink className="foot" to="/center">
          <i className='iconfont icon-wode'></i>
          <span>我的</span>
        </NavLink>
      </div>

    )
  }
}


export default Footer;
