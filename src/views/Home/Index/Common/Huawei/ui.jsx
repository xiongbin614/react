import React from 'react';
import './ui.less';
import Goods from './comons/ui.jsx';
import Footer from "@/components/ConentFooter/ui.jsx";
class Huawei extends React.Component{
    
  render(){
    return(
      <div className="huawei">
      {/* 轮播图 */}
          <div className="h-banner">
            {this.props.match.params.id}
          </div>
          {/* 导航 */}
          <ul className="h-nav">
            <li>
            <i className="iconfont iconcategory"></i> 
              <span>分类</span>
            </li>
            <li>
              <i className="iconfont iconcategory"></i>
              <span>优购码</span>
            </li>
            <li>
              <i className="iconfont iconcategory"></i>
              <span>以旧换新</span>
            </li>
            <li>
              <i className="iconfont iconcategory"></i>
              <span>实名认证</span>
            </li>
            <li>
              <i className="iconfont iconcategory"></i>
              <span>APP下载</span>
            </li>
          </ul>
          {/* 两张手机宣传图 */}
          <div className="h-timg">
             <img src="https://res.vmallres.com/pimages//sale/2019-01/tyzwlRcNs4ZyoJB2E1y8.png" alt=""/>
             <img src="https://res.vmallres.com/pimages//sale/2019-02/DSVirP2e7W8cawkrqvBu.png" alt=""/>
          </div>
          {/* 手机电脑等组件 */}
        <Goods></Goods>
        <Goods></Goods>
        <Footer></Footer>
      </div>
    )
  }
}

export default Huawei;
