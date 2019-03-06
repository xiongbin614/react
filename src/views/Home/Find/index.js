import React from 'react';
import './index.css';
import axios from 'axios';
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';


class Find extends React.Component{
    constructor(props){
      super(props)
      this.state={
        data:[]
      }
    }
    componentWillMount(){
      axios.get('http://10.36.132.216:3005/getInfo/findInfo').then(data=>{
        this.setState({
          data:data.data[0].contentDetailList
        })
      })

    }


  render(){
    return(
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
                    <li><a href="#"><img
                          src="https://res.vmallres.com/pimages/cop/20181122160831989/1542874111989.png"/></a></li>
                    <li><a href="#"><img
                          src="https://res.vmallres.com/pimages/cop/20181122160903197/1542874143197.jpg"/></a></li>
                    <li><a href="#"><img
                          src="https://res.vmallres.com/pimages/cop/20181122160844625/1542874124624.jpg"/></a></li>
                    <li><a href="#"><img
                          src="https://res.vmallres.com/pimages/cop/20181122160914273/1542874154273.png"/></a></li>
                    <li><a href="#"><img
                          src="https://res.vmallres.com/pimages/cop/20190121105041163/HbtXBNQW0tvbP6g9Xbo6.png"/></a></li>
                  </ul>
                <div className="im-nav-xinwen">
                  <ul>
                    <li><a href="#">
                        <p className="p-img"><img src="https://res.vmallres.com/pimages//cop/20190304171541372/XIshT2guyP7qTZrNPo0q.jpg" />
                        </p>
                        <p className="p-name">斩获46项大奖！华为MWC2019圆满收官</p>
                        <p className="p-promotion">2019世界移动大会已落下帷幕，华为MWC2019载誉而归！首部5G折叠屏手机HUAWEI Mate
                          X一经亮相，备受瞩目，一举揽下31项权威大奖；延续经典、全面升级的HUAWEI MateBook系列，斩获15项荣誉奖项。感谢支持与肯定，我们将继续携初心而行，不负众望！</p>
                        <p className="p-other"><span>2019-03-04</span><i className="em">2474&nbsp;阅读</i></p>
                      </a>
                    </li>
                    <li><a href="#">
                        <p className="p-img"><img src="https://res.vmallres.com/pimages//cop/20190304164931658/VvQZbEPvgmzAMDVpN9Q3.jpg"/>
                        </p>
                        <p className="p-name">荣耀手机这9个实用功能，来看看你都学会了吗</p>
                        <p className="p-promotion">在我们的玩机过程中，总有几个特别好用的功能让我们倍感贴心。今天我们就与粉粉们分享一下荣耀手机的9大贴心功能，废话不多说，直接进入主题吧。</p>
                        <p className="p-other"><span>2019-03-04</span><i className="em">1904&nbsp;阅读</i></p></a>
                    </li>

                      <li><a href="#">
                          <p className="p-img"><img src="https://res.vmallres.com/pimages//cop/20190228102514645/zt1ZsuwKtyTuBoXiKMCn.jpg" />
                          </p>
                          <p className="p-name">MWC2019智慧新品发布丨外媒热评抢先看</p>
                          <p className="p-promotion">在MWC2019华为终端的发布会上，有着多款亮眼新品发布，在海内外都引起了不小的轰动，想知道海内外科技媒体是如何评价这些新品的吗？一起来看下吧</p>
                          <p className="p-other"><span>2019-03-01</span><i className="em">18034&nbsp;阅读</i></p>
                        </a></li>

                      <li><a href="#">
                          <p className="p-img"><img src="https://res.vmallres.com/pimages//cop/20190228214057644/j0kt7fDpjknpv6DZNVkP.jpg" />
                          </p>
                          <p className="p-name">喜报！华为Mate X与 Mate20 Pro喜提MWC2019大奖</p>
                          <p className="p-promotion">Mate力无限！HUAWEI Mate X与HUAWEI Mate 20 Pro在本次MWC2019大会上分别喜提MWC2019最佳新联接移动终端与最佳智能手机大奖</p>
                          <p className="p-other"><span>2019-02-28</span><i className="em">34976&nbsp;阅读</i></p>
                        </a></li>

                      <li><a href="#">
                          <p className="p-img"><img src="https://res.vmallres.com/pimages//cop/20190227184452162/MgX3IwbyZhMOFfWqmV1I.jpg"/>
                          </p>
                          <p className="p-name">速报！提高手机生产力的黑科技来了</p>
                          <p className="p-promotion">上课、会议、培训时，看到PPT上的要点，我们习惯手机拍照记录，如何将照片整理成PPT？智能文档编辑功能，图片一键生成可编辑PPT。</p>
                          <p className="p-other"><span>2019-02-28</span><i className="em">2664&nbsp;阅读</i></p>
                        </a></li>
                  </ul>

                  <div className="click-more"><a>
                    发现更多商城头条 ></a>
                  </div>
                </div>

              </div>
            </div>

          <div className="findList">
            <div className="h">
              <h1>新摄汇</h1>
            </div>
            <div className="camera-floor ">
              <div className="large"><a href="#"><img
                    src="https://res.vmallres.com/pimages/cop/20190201231150321/JzgL4qtdozKuzf3yharR.jpg" />
                  <p>来自 HUAWEI Mate 20 Pro</p>
                </a></div>
              <div className="small"><a href="#"><img
                    src="https://res.vmallres.com/pimages/cop/2019020123222175/SJTaXCfop1ASMM4PyltQ.jpg" />
                  <p>来自 HUAWEI Mate 20 Pro</p>
                </a></div>
              <div className="small"><a href="#"><img
                    src="https://res.vmallres.com/pimages/cop/20190201230704704/xcevPof2TEQAL00yJvzU.jpg" />
                  <p>来自 荣耀V20</p>
                </a></div>
              <div className="small"><a href="#"><img
                    src="https://res.vmallres.com/pimages/cop/20190201231454334/NlhkuF8TKkXmHhIKlRS1.jpg" />
                  <p>来自 HUAWEI Mate 20 Pro</p>
                </a></div>
              <div className="middle"><a href="#"><img
                    src="https://res.vmallres.com/pimages/cop/20190201232533619/ZBW8TRUIlcN00GCwbXlO.jpg" />
                  <p>来自 荣耀V20</p>
                </a></div>
            </div>
              <div className="click-more"><a>发现更多新摄汇 ></a></div>
          </div>

          <div className="lzy-mian-b">
            <h1>口碑好货</h1>
            <ul className="kbhh">
              {this.state.data.map(item=>{
                return(

                <li key={item.id}>
                  <div className="itemProdDetail">
                  <a href="#">
                    <p className="p-img"><img src={`https://res.vmallres.com/pimages/${item.thumbnail}`}/></p></a>
                    <p className="p-name">{item.title}</p>
                    <p className="p-promotion">{item.summary}</p>
                    <p className="p-other"><span>2019-03-01</span><i className="em">{`来自${item.recommenderName}的推荐`}</i></p>
                  </div>
                </li>
                )
              })}
              </ul>

          </div>



          </div>
         </div>
    )
  }
}





export default Find;
