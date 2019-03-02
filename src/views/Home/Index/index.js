import React from 'react';
import './index.less';
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';


class Index extends React.Component{
  render(){
    return(
      <div className="index">
      {/* 顶部搜索 */}
        <div className="i-header">
          <img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/logo/logo_vmall.png" alt="" />
          <div className="search">
            <i className="iconsearch iconfont"></i>
            <div className="keys">5555</div>
          </div>
          <i className="iconfont iconxiaoxi"></i>
          <span>登录</span>
        </div>
        {/* 顶部导航 */}
        <ul className="i-nav">
          <li>推荐</li>
          <li>华为</li>
          <li>荣耀</li>
          <li>新品</li>
          <li>数码惠</li>
        </ul>
        
      </div>
    )
  }
}





export default Index;