import React from 'react';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './ui.less';
import {  NavLink} from 'react-router-dom';
import store from '@/store/xb/index.js';


class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      todos:'11'
    })
    store.subscribe(() => {
      console.log('我变了，你做事吧');
      this.setState({
        todos: store.getState().age
      })
    })
  }
  
  add(){
    console.log(55)
    store.dispatch({
      type:"ADD",
      text:"kkhhh"
    })
  }
  render(){
    return (
        <div className="Footer">
            <div className="f-top">
          <NavLink to="/login">登录{this.state.todos}</NavLink>
          <i >|</i>
          <span onClick={this.add.bind(this)}>反馈{store.getState().name}</span>
            </div>
            <div className="f-bottom">
              <ul className="f-touch">
                <li>
              <i className="iconfont icon-shouji"></i>
                  <span>客服端</span>
                </li>
                <li>
              <i className="iconfont icon-hongpingbanzhuanhuan"></i>
                  <span>触屏版</span>
                </li>
                <li>
              <i className="iconfont icon-diannaoban"></i>
                 
                  <span>电脑版</span>
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