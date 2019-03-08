import React from 'react';
import './index.css';
import Item from './common/item.jsx';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';


class Cart extends React.Component{
  render(){
    return(
      <div className="A">
        <header>购物车</header>
        <div className="nav">
          <div claName="kong">
            <p><i className="iconfont icon-gwc">购物车还没有商品赶紧选购吧！</i></p>
            <p><a href="#">去逛逛</a></p>
          </div>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          {/* <div className="jiesuanFooter">
            <div className="check">
              <input type="checkbox" name="" id="" />全选
            </div>
            <div className="result">
              <p>总计:</p>
              <span>￥2500</span>
              <button>结算(1)</button>
            </div>
          </div> */}
      
      
        </div>

        
        <div className="mian">
          <p>热销推荐</p>
          <div className="mian_t">
            <ul>
                <li>
                    <a href="#">
                      <img src="https://res.vmallres.com/pimages/product/2601010086605//428_428_1550815661328mp.png" alt="" />
                      <h3>HUAWEI | nova</h3>
                      <h2>￥3099</h2>
                    </a>
                </li>
                <li>
                      <a href="#">
                        <img src="https://res.vmallres.com/pimages/product/6901443280988//428_428_1545877216682mp.png" alt="" />
                        <h3>荣耀V20</h3>
                        <h2>￥2999</h2>
                      </a>
                </li>
                <li>
                        <a href="#">
                          <img src="https://res.vmallres.com/pimages/product/6901443260232//428_428_1539230426520mp.png" alt="" />
                          <h3>HUAWEI|Mate 20</h3>
                          <h2>￥3999</h2>
                        </a>
                </li>
                <li>
                          <a href="#">
                            <img src="https://res.vmallres.com/pimages/product/6901443232413//428_428_1535358175728mp.jpg" alt="" />
                            <h3>荣耀10 A|摄影手机</h3>
                            <h2>￥2199</h2>
                          </a>
                </li>
                <li>
                            <a href="#">
                              <img src="https://res.vmallres.com/pimages/product/6901443262182//428_428_1542769704670mp.png" alt="" />
                              <h3>HUAWEI|Mate 20 X</h3>
                              <h2>￥4999</h2>
                            </a>
                </li>
                <li>
                              <a href="#">
                                <img src="https://res.vmallres.com/pimages/product/6901443272709//428_428_1540987820121mp.png" alt="" />
                                <h3>荣耀8X</h3>
                                <h2>￥1399</h2>
                              </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}





export default Cart;
