import React from 'react';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './ui.less';
import {  NavLink} from 'react-router-dom';


class Footer extends React.Component{
  render(){
    return (
        <div className="Footer">
            <div className="f-top">
             <NavLink to="/login">登录</NavLink>
              <i>1</i>
              <span>反馈</span>
            </div>
            <div className="f-bottom">
              <ul className="f-touch">
                <li>
                  <i>1</i>
                  <span>客服端</span>
                </li>
                <li>
                  <i>1</i>
                  <span>客服端</span>
                </li>
                <li>
                  <i>1</i>
                  <span>客服端</span>
                </li>
              </ul>
              <ul className="f-about">
                <li className="f-aboutTop">
                  <span>隐私政策</span>
                  <i>1</i>
                  <span>隐私政策</span>
                  <i>1</i>
                  <span>隐私政策</span>
                </li>
                <li>苏ICP备17040376号-6 增值电信业务经营许可证：</li>
                <li>苏ICP备17040376号-6 增值电信业务经营许可证：</li>
                <li>苏ICP备17040376号-6 增值电信业务经营许可</li>
                <li>苏ICP备17040376号-6 增值电信业务经</li>
                <li>苏ICP备17040376号-6</li>
                
              </ul>
            </div>
        </div>

    )
  }
}
export default Footer;