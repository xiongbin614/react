import React from 'react';
import './ui.less';

class TjShow extends React.Component{
  render(){
    return(
      <div className="TjShow">
          <h2>笔记本</h2>
          <ul className="Tj-item">
            <li>
              <div className="item-img">
                  <span>热卖</span>
                  <img src="https://res1.vmallres.com/pimages//product/6901443228003/428_428_1539915319345mp.png"/>
                  <p>限量送超级配件</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
            <li>
              <div className="item-img">
                  <span>热卖</span>
                  <img src="https://res1.vmallres.com/pimages//product/6901443228003/428_428_1539915319345mp.png"/>
                  <p>限量送超级配件</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
            <li>
              <div className="item-img">
                  <span>热卖</span>
                  <img src="https://res1.vmallres.com/pimages//product/6901443228003/428_428_1539915319345mp.png"/>
                  <p>限量送超级配件</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
          </ul>

        <div className="i-tjShow">
          <ul className="tj-info">
            <li>
              <div className="tj-img">
                <span>热卖</span>
                <img src="https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png" alt="" />
                <p>11</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
            <li>
              <div className="tj-img">
                <span>热卖</span>
                <img src="https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png" alt="" />
                <p>11</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
            <li>
              <div className="tj-img">
                <span>热卖</span>
                <img src="https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png" alt="" />
                <p>11</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
            <li>
              <div className="tj-img">
                <span>热卖</span>
                <img src="https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png" alt="" />
                <p>11</p>
              </div>
              <p className="p-name">荣耀9</p>
              <p className="p-price">￥3200</p>
            </li>
          </ul>
        </div>

          
          <div className="moreInfo">
            发现更多笔记本<i>></i>
          </div>
      </div>
    )
  }
}

export default TjShow;