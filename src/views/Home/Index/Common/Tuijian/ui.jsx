import React from 'react';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './ui.less';
import Footer from '../../../../../components/ConentFooter/ui.jsx';

class IndexConent extends React.Component{
  render(){
    console.log(this.props);
    return (
      <div className="i-content">
          <div className="i-banner">
            {this.props.match.params.id}
          </div>
          <div className="i-nav">
              <div className="i-navTop">
                <span>官方商城</span>
                <span>官方商城</span>
                <span>官方商城</span>
              </div>
              <ul className="i-navBottom">
                <li>
                 <img src="https://res.vmallres.com/pimages//squaredInfo/icon/20190213/DY5mX2aQoCVt63gWQnlD.png" alt=""/>
                  <span>邀请有奖</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages//squaredInfo/icon/20190213/DY5mX2aQoCVt63gWQnlD.png" alt="" />
                  <span>邀请有奖</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages//squaredInfo/icon/20190213/DY5mX2aQoCVt63gWQnlD.png" alt="" />
                  <span>邀请有奖</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages//squaredInfo/icon/20190213/DY5mX2aQoCVt63gWQnlD.png" alt="" />
                  <span>邀请有奖</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages//squaredInfo/icon/20190213/DY5mX2aQoCVt63gWQnlD.png" alt="" />
                  <span>邀请有奖</span>
                </li>
                
              </ul>
          </div>
          {/* 商城头条 */}
          <div className="i-hander">
            <span>商城头条</span>
            <div className='handerNews'>滚动新闻</div>
            <p>更多...</p>
          </div>
          {/* 图片展示 */}
          <div className="i-showImg">
            <div className="showLeft">
              <img src="https://res.vmallres.com/pimages//sale/2019-01/PxPCf93hBfhRTqz2O70m.jpg" alt=""/>
               <img src="https://res.vmallres.com/pimages//sale/2019-02/pORLYH4cKqqTN9loyKai.jpg" alt=""/>
             <img src="https://res.vmallres.com/pimages//sale/2019-02/esrKQgf3SrAduXFeZzO8.jpg" alt=""/>
            </div>
            <div className="showRight">
              <img src="https://res.vmallres.com/pimages//sale/2018-12/DqrLI2YPDXZ3UB51Rx8I.jpg" alt=""/>
              <img src="https://res.vmallres.com/pimages//sale/2019-02/sdzwtPr47AiNimE9IHxq.jpg" alt=""/>
              <img src="https://res.vmallres.com/pimages//sale/2019-02/ISZvXRn7zkgCDXgJvKih.jpg" alt=""/>
               <img src="https://res.vmallres.com/pimages//sale/2019-02/a6vzFsJYGKvZqUw0kBWb.jpg" alt=""/>
            </div>
          </div>
        <Footer></Footer>
      </div>
    )
  }
}
export default IndexConent;