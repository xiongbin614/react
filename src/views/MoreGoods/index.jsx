import React from 'react';
import './index.less';
import { Route, NavLink, Switch } from 'react-router-dom';

class MoreGoods extends React.Component{
  render(){
    return(
      <div className="moreGoods">
        <div className="header">
          <div className="m-header">
            <NavLink to="/">1</NavLink><span>手机</span>
          </div>
          <div className='m-nav'>
            <ul className="m-sort">
              <li>最新</li>
              <li>人气</li>
              <li>价格</li>
              <li>评价</li>
            </ul>
           </div>
          </div>
          <div className="content">
            <ul>
              <li>
                <div className="left-img">
                <img src="https://res.vmallres.com/pimages//product/6901443288359/428_428_1551509965773mp.png" alt=""/>
                </div>
                <div className="right-title">
                  <div className="top">
                    <h4>荣耀平板8寸</h4>
                    <p>5555</p>
                  </div>
                  <div className="bottom">
                    ￥3200
                  </div>
                </div>
              </li>

            <li>
              <div className="left-img">
                <img src="https://res.vmallres.com/pimages//product/6901443288359/428_428_1551509965773mp.png" alt="" />
              </div>
              <div className="right-title">
                <div className="top">
                  <h4>荣耀平板8寸</h4>
                  <p>5555</p>
                </div>
                <div className="bottom">
                  ￥3200
                  </div>
              </div>
            </li>
            <li>
              <div className="left-img">
                <img src="https://res.vmallres.com/pimages//product/6901443288359/428_428_1551509965773mp.png" alt="" />
              </div>
              <div className="right-title">
                <div className="top">
                  <h4>荣耀平板8寸</h4>
                  <p>5555</p>
                </div>
                <div className="bottom">
                  ￥3200
                  </div>
              </div>
            </li>
            <li>
              <div className="left-img">
                <img src="https://res.vmallres.com/pimages//product/6901443288359/428_428_1551509965773mp.png" alt="" />
              </div>
              <div className="right-title">
                <div className="top">
                  <h4>荣耀平板8寸</h4>
                  <p>5555</p>
                </div>
                <div className="bottom">
                  ￥3200
                  </div>
              </div>
            </li>
            </ul>
          </div>
      </div>
    )
  }
}

export default MoreGoods;