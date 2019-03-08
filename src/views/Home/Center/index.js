import React from 'react';
import './index.css';
import imgURL from '@/center-images/img01.png';
import {NavLink} from 'react-router-dom';
import { Carousel, WingBlank, Button } from 'antd-mobile';//轮播图插件
import 'antd-mobile/dist/antd-mobile.css';


class Center extends React.Component{
        constructor(props){
            super(props)
            this.state={
                userName:'登录/注册',
            }
        }
    componentWillMount(){
        console.log(sessionStorage.length)
        this.setState({
            userName: sessionStorage.length ? sessionStorage.getItem("name") : '登录/注册'
        })
        if (sessionStorage.length>0){

        }
    }    
    login(e){
        if (sessionStorage.length>0){
            console.log(55555)
            e.preventDefault()
        }
    }
    

  render(){
    return(
          <div className="center">
           <div className="headers">
        <div className="head-top">
        <a href="#"><img src={imgURL}/></a> 
        </div>
        <div className="head-main">
            <p><img src="https://res.vmallres.com/nwap/20190215/staticm/img/personal/defaultface_user_after.png"/></p>
            <p><NavLink onClick={this.login.bind(this)} to="/login">{this.state.userName}</NavLink></p>
            <p className="p2"><i>签到领积分</i></p>
        </div>
        <div className="m-property">
            <ul>
                <li>
                    <a href="#">
                        <p className="m-num">
                            -
                        </p>
                        <p className="m-title">
                            积分
                        </p>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <p className="m-num">
                            -
                        </p>
                        <p className="m-title">
                            积分
                        </p>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <p className="m-num">
                            -
                        </p>
                        <p className="m-title">
                            积分
                        </p>
                    </a>
                </li>
            </ul>
        </div>
  </div>
  {/* <!-- 我的订单 --> */}
  <div className="order">
      <div className="order-h">
        <span className="my-o"><a href="#">我的订单</a></span>
        <span className="quan-o"><a href="#">全部订单</a></span>
      </div>
      <div className="dd-list">
          <ul>
              <li>
                <a href="#">
                    <img src="image/dd-list.png"/>待付款
                </a>
              </li>
              <li>
                <a href="#">
                    <img src="image/dd-list.png"/>待付款
                </a>
              </li>
              <li>
               <a href="#">
                    <img src="image/dd-list.png"/>待付款
                </a>
              </li>
              <li>
                <a href="#">
                    <img src="image/dd-list.png"/>待付款
                </a>
              </li>
              <li>
                <a href="#">
                    <img src="image/dd-list.png"/>待付款
                </a>
              </li>
          </ul>
      </div>
  </div>
  {/* <!-- 会员专享 --> */}
    <div className="vip">
        <div className="vip-h">
            <span className="v1"><a href="#">会员专享</a></span>
            <span className="v2"><a href="#">更多会员权益</a></span>
        </div>
        <div className="vip-b">
            <div className="v-left">
                <div>
                    <span className="price">￥200</span>
                    <span className="coupons">
                      【会员】华为200元优惠券
                    </span>
                </div>
            </div>
            <div className="v-left">
                <div>
                    <span className="price">￥200</span>
                    <span className="coupons">
                      【会员】华为200元优惠券
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- 我的VMAll --> */}
    <div className="vmall">
        <div className="vm-t">
            <span>我的VMAll</span>
        </div>
        <div className="vm-list">
            <ul>
                <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/BJ3yBCSQydHocrvpqouX.png"/>会员频道
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/CxxaQUn1styosBPNjheA.png"/>邀请有礼
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/BDjOuitdEfznqCD6zKfz.png"/>优享购
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/KCsUPSr3FuMtgG62XaLG.png"/>优购码
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/1sWsHZS0T0ZKYo3IGdPG.png"/>收货地址
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/oVwOrKQ2hCCePmsW5l6F.png"/>实名认证
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/5iCwGNy2oKciAOCGZJhm.png"/>预约记录
                    </a>
              </li>
              <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/PfBQsbu7SFZdQTi3gA1I.png"/>账号中心
                    </a>
              </li>
            </ul>
        </div>
    </div>
    {/* <!-- 我的服务 --> */}
    <div className="serve">
        <div className="se-h">
            <span className="my-se">我的服务</span>
            <span className="se-zx">服务中心</span>
        </div>
        <div className="se-list">
            <ul>
                <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/G07ccteX3vNYZ93ZJVKe.png"/>以旧换新
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/a2Ow2HcAKPNE2jECvrg4.png"/>手机充值
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/bIwoJuOcF8sjggyMG4PQ.png"/>补购保障
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/TEJxSMpMfgceNFZjmoqF.png"/>线下门店
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/1W1R0l3V2gKSRv0RG81m.png"/>常见问题
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/6hAmuivo0xmeSXmUawi3.png"/>意见反馈
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/49vWUTRbVJzX6cHkMifv.png"/>服务中心
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://res.vmallres.com/pimages/pages/personal/a5OtLIwVflwgkJpPzVYs.png"/>配件防伪
                    </a>
                </li>
            </ul>
        </div>
    </div>
          </div>
    )
    }
}





export default Center;
