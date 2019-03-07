import React from 'react';
import './index.less';
import {  Route, NavLink, Switch } from 'react-router-dom';
import indexConent from './Common/Tuijian/ui.jsx';
import Huawei from './Common/Huawei/ui.jsx';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { Carousel, WingBlank, Button } from 'antd-mobile';//轮播图插件
import 'antd-mobile/dist/antd-mobile.css';

class Index extends React.Component{
    constructor(props){
      super(props)
      this.setState({
        list:''
      })
    }
  dd(name){
    this.setState={
      list:name
    }
  }
  render(){
    return(
      <div className="index">
        <div className="i-header">
      {/* 顶部搜索 */}
          <div className="i-head">
            <img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/logo/logo_vmall.png" alt="" />
            <div className="search">
              <i className="iconsearch iconfont"></i>
              <NavLink to="/login" className="keys">
               55
              </NavLink>
            </div>
            <i className="iconfont iconxiaoxi"></i>
            <span>登录</span>
          </div>
          {/* 顶部导航 */}
          <div className="i-nav">
            <NavLink exact  to="/index">推荐</NavLink >
            <NavLink to="/index/huawei" onClick={this.dd.bind(this,'华为')} >华为</NavLink >
            <NavLink to="/index/honor" onClick={this.dd.bind(this, '荣耀')}>荣耀</NavLink >
            <NavLink to="/index/honornew" >新品</NavLink >
            <NavLink to="/index/digital" >数码惠</NavLink>
          </div>
        </div>
        {/* 主要内容 */}
        <div className="i-main">
          <div className="m-conent">
            {/* 放置路由 */}
              <Switch>
                  <Route path='/index/:id' component={Huawei} ></Route>
                  <Route path='/index' component={indexConent} ></Route>
              </Switch>
          </div>
        </div>
      </div>
    )
  }
}





export default Index;