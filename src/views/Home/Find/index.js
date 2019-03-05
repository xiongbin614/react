import React from 'react';
import './index.css';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';


class Find extends React.Component{
  render(){
    return(
      <div>
        <div className="lzy-app">
          <div className="lzy-head">
            <h1>发现频道</h1>
          </div>
          <section className="lzy-head-mian">
            <section>
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_headline.png" />
                    <p>商城公告</p>
                  </a></li>
                <li> <a href="#"><img
                      src="https://res.vmallres.com/pimages//cop/image/2019/tiHS593NPXbqgwfT47xk.png"/>
                    <p>企业购</p>
                  </a></li>
                <li><a href="#">
                  <img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_fans.png"/>
                    <p>粉丝互动</p>
                  </a></li>
                <li><a href="#"><img
                      src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_camera.png"/>
                    <p>新摄汇</p>
                  </a></li>
                <li><a href="#">
                  <img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_public_surver.png"/>
                    <p>华为众测</p>
                  </a></li>
              </ul>
            </section>
          </section>

           <div className="lzy-mian">
            <div className="lzy-mian-t">
              <h1>商城头条 <a href="#">声明</a></h1>
              <div className="lm-nav">
                  <ul className="clearfix">
                    <li><a href="#" className=""><img
                          src="https://res.vmallres.com/pimages/cop/20181122160831989/1542874111989.png"/></a></li>
                    <li><a href="#" className=""><img
                          src="https://res.vmallres.com/pimages/cop/20181122160903197/1542874143197.jpg"/></a></li>
                    <li><a href="#" className=""><img
                          src="https://res.vmallres.com/pimages/cop/20181122160844625/1542874124624.jpg"/></a></li>
                    <li><a href="#" className=""><img
                          src="https://res.vmallres.com/pimages/cop/20181122160914273/1542874154273.png"/></a></li>
                    <li><a href="#" className=""><img
                          src="https://res.vmallres.com/pimages/cop/20190121105041163/HbtXBNQW0tvbP6g9Xbo6.png"/></a></li>
                  </ul>
              </div>
            </div>




            <div className="lzy-mian-c">

            </div>









            <div className="lzy-mian-b">

            </div>
          </div>

        </div>
      </div>
    )
  }
}





export default Find;
