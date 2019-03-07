import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React, { Component } from 'react';
import './index.less';
import { NavLink } from 'react-router-dom';

class Details extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     data:[]
  //   }
  // }
  // scrollHandler = this.handleScroll.bind(this);

  // componentDidMount () {
  //   window.addEventListener('scroll',this.scrollHandler);
  // }


  // _handleScroll (scrollTop) {
  //     console.log(scrollTop) //滚动条距离页面的高度
  //   }


  // handleScroll (event) {
  //   let scrollTop = event.srcElement.body.scrollTop; this._handleScroll(scrollTop);
  // }


  render() {
    return (
      <div className="details">
        <div className="top-nav">
          <a id="btn-back" href="javascript:history.go(-1);"className="icon-btn-left">
          <img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_back_grey.png"/>
          </a>
          <a href="javascript:;" className="icon-btn-right" title="下拉菜单"><img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_more_grey.png"/></a>
        </div>
        <div className="lzy-swiper">
             <WingBlank>
                <Carousel
                  autoplay={true}
                  infinite
                  dots={true}
                >
                  <img src="https://res.vmallres.com/pimages//display/10086785341226/428_428_a_mobile1551928412884.png" alt="" />
                  <img src="https://res.vmallres.com/pimages//product/6901443232826//428_428_1523952750584mp.jpg" alt="" />
                  <img src="https://res.vmallres.com/pimages//product/6901443232826/group//428_428_1523952751001.jpg" alt="" />
                  <img src="https://res.vmallres.com/pimages//product/6901443232826/group//428_428_1523952751002.jpg" alt=""/>
                  <img src="https://res.vmallres.com/pimages//product/6901443232826/group//428_428_1523952750998.jpg" alt=""/>
                  <img src="https://res.vmallres.com/pimages//product/6901443232826/group//428_428_1523952751004.jpg" alt=""/>
                  <img src="https://res.vmallres.com/pimages//product/6901443232826/group//428_428_1523952750999.jpg" alt=""/>
                  <img src="https://res.vmallres.com/pimages//product/6901443232826/group//428_428_1523952751003.jpg" alt=""/>
                </Carousel>
              </WingBlank>

        </div>


        <div className="xqy-mian">
          <div className="money">
          <p>￥2199</p>
          </div>
          <div className="xqy-xx">
            <p className="xqy-xiakuan-0">荣耀10 GT游戏加速 AIS手持夜景 AI摄影手机 6GB+64GB 幻影蓝 全网通 双卡双待 荣耀10GT</p>
          </div>
          <div className="xqy-xiakuan">
              <p className="xqy-xiakuan-1">下单付款后预计1周内发货【限时领券优惠100，到手价2099元】</p>
              <p className="xqy-xiakuan-2">麒麟970AI芯片|GPU Turbo|手持超级夜景
              </p>
          </div>

          <div>
            <div>领券</div>
            <div></div>
          </div>

          <div>
            <div>颜色</div>
            <div></div>
          </div>

            <div>
            <div>版本</div>
            <div></div>
          </div>

          <div>
            <div>类型</div>
            <div></div>
          </div>

          <div>
            <div>保障</div>
            <div></div>
          </div>

          <div>
            <div>发货</div>
            <div></div>
          </div>

          <div>
            <div>服务</div>
            <div></div>
          </div>

          <div>
            <div>推荐</div>
            <div></div>
          </div>

          <div>
            <div></div>
            <div>以旧换新</div>
          </div>

          <div>
            <div>用户评价</div>
            <div></div>
          </div>

          <div>
            <div>规格参数</div>
            <div></div>
          </div>

          <div>很多很多的图片</div>


        </div>

        <div className="footer">
            <NavLink className="foot" to="/index">
              <i className="iconfont iconshouye"></i>
              <span>首页</span>
            </NavLink>
            <NavLink className="foot" to="/classify">
              <i className='iconfont iconcategory'></i>
              <span>分类</span>
            </NavLink>
            <NavLink className="foot" to="/cart">
              <i className='iconfont icongouwuchekong'></i>
              <span>购物车</span>
            </NavLink>
            <div className="xqy-footer-gm">
              <div className="gm-l">加入购物车</div>
              <div className="gm-r">立即购买</div>
            </div>
        </div>


      </div>
    )
  }
}

export default Details;
