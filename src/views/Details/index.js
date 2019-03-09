import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React, { Component } from 'react';
import './index.less';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import store from '@/store/xb/index.js';


class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  // 添加购物车
  addCart(){
    // 1.获取urlid====》this.props.location.search.split('=')[1]
    // 2.将id存在仓库里面
    let id = this.props.location.search.split('=')[1];
    // console.log(id)
    // store.dispatch({
    //   type:"ADD_CART",
    //   id: this.props.location.search.split('=')[1]
    // })
    // 没有登录不准加入购物车
    if (sessionStorage.length===0){
      this.props.history.push("/login")
    }else{
      // 存放localstage里面  158xxx000 [{id:xx,num:x}{}{}]
      if (localStorage.length>0){
        let arr = JSON.parse(localStorage.getItem(sessionStorage.getItem('name')))
        // console.log(arr)//数组
        for(var i=0;i<arr.length;i++){
          // console.log("akdjahfiahfjk")
          if (Number(arr[i].id) === Number(id)){//j是id和num
            if (Number(arr[i].id) === Number(id)){
              let a = ++arr[i].num;
              let obj2={}
              obj2.id = arr[i].id;
              obj2.num=a;
              arr.splice(i, 1, obj2);
              localStorage.setItem(sessionStorage.getItem('name'), JSON.stringify(arr))
            }
          } else {
            let arr2 = JSON.parse(localStorage.getItem(sessionStorage.getItem('name')));
            let obj = {};
            obj.id = Number(id);
            obj.num = 1;
            arr2.push(obj);
            // console.log("dididid")
            localStorage.setItem(sessionStorage.getItem('name'), JSON.stringify(arr2))
          }
        }
      }else{
        localStorage.setItem(sessionStorage.getItem('name'), '[{"id":' + Number(id) + ',"num":1}]')
      }
    }
    
  }


  // 组件创建之前获取数据
  componentWillMount(){
    // 获取urlid
    // console.log(this.props.location.search.split('=')[1])
    // 发送axios请求获取相关数据
    axios.get("http://localhost:3005/getInfo/moreinfo").then(res=>{
      // console.log(res.data[0].data)//所有的数组对象
      // 查找与urlid相匹配的
      this.setState({
        data: res.data[0].data.find(item=>{
          if (this.props.location.search.split('=')[1]===item.id){
            return item
          }
        })
      })
    })
  }
  add(){
    // console.log(this.state.data)
  }
  render() {
    return (
      <div className="details" >
        <div className="xqy-head-nav" >
          <ul className="xqy-head-nav-ul">
            <li><a id="btn-back" href="javascript:history.go(-1);"><img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_black_1.png"/></a></li>
            <li><a href="#">商品</a></li>
            <li><a href="#">评价</a></li>
            <li><a href="#">参数</a></li>
            <li><a href="#">详情</a></li>
            <li><a href="javascript:;" className="icon-btn-right-1 icon-header-menu" onclick="ecWap.paq('trackLink', 'wap-pdp-more-click_event', 'link', '');" title="下拉菜单"><img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_header_nav.png" /></a></li>
          </ul>
        </div>
        <div className="top-nav" >
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
                   <img src={"http://localhost:3005/"+this.state.data.img} alt="" />
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
          <p onClick={this.add.bind(this)}>{this.state.data.price}</p>
          </div>
          <div className="xqy-xx">
            <p className="xqy-xiakuan-0">{this.state.data.name} {this.state.data.describe}</p>
          </div>
          <div className="p-promotion j_pro-skuPromWord">
            <div className="j_pagetimerPromWord"><a href="https://m.vmall.com/product/10086619433759.html"><div>【华为智慧生活节】购机赠小天鹅蓝牙音箱，享6期免息。老用户购机享一年官方碎屏险，老用户专属购机通道点击&gt;&gt;&gt;</div></a></div>
                        </div>

          <div className="pro-box" id="getPromotion">
             <label className="box-label">促销</label>
              <ul className="ub-f1 ub ub-ver j_pdiscount">
                <li className="ub ub-ac">
                  <div className="btn-sm-active">整点赠送</div>
                  <p className="ub-f1">10点/16点/20点 下单前300名赠蓝牙对耳（指定手机共享）</p>
                </li>
                <li className="ub ub-ac">
                  <div className="btn-sm-active">积分红包</div>
                  <p className="ub-f1">现有积分下单双倍抵现，最高价值50元。</p>
                </li>
                <li className="ub ub-ac">
                  <div className="btn-sm-active">分期免息</div>
                  <div className="btn-sm-active">赠送积分</div>
                </li>
              </ul>
              <img className="icon-select-right" src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_header_nav.png"/>
          </div>

          <div className="dl">
              <dt><label>颜色</label></dt>
              <dd>
                  <a href="javascript:;" className="j_skuItem attr251250 attr251092 selected" data-attrname="颜色" data-attrid="251250,251092" data-skuid="10086511497719,10086196916609"><span>亮黑色</span>
                  </a>
                  <a href="javascript:;" className="j_skuItem attr241958 attr241994" data-attrname="颜色" data-attrid="241958,241994" data-skuid="10086768866349,10086636198354"><span>宝石蓝</span>
                  </a>
                  <a href="javascript:;" className="j_skuItem attr241966 attr242002" data-attrname="颜色" data-attrid="241966,242002" data-skuid="10086137346753,10086593388928"><span>樱粉金</span>
                  </a>
                  <a href="javascript:;" className="j_skuItem attr241972 attr242008" data-attrname="颜色" data-attrid="241972,242008" data-skuid="10086137439137,10086164247453"><span>翡冷翠</span>
                  </a>
                  <a href="javascript:;" className="j_skuItem attr241980 attr242014" data-attrname="颜色" data-attrid="241980,242014" data-skuid="10086465290972,10086713134659"><span>极光色</span>
                  </a>
                </dd>
            </div>

            <div className="dl">
                <dt><label>版本</label></dt>
                <dd>
                    <a href="javascript:;" className="j_skuItem attr251250 attr251092 selected" data-attrname="颜色" data-attrid="251250,251092" data-skuid="10086511497719,10086196916609"><span>全网通6GB+64GB</span>
                    </a>
                    <a href="javascript:;" className="j_skuItem attr241958 attr241994" data-attrname="颜色" data-attrid="241958,241994" data-skuid="10086768866349,10086636198354"><span>全网通64GB+128GB</span></a>
                  </dd>
              </div>

              <div className="dl">
                  <dt><label>套餐</label></dt>
                  <dd>
                      <a href="javascript:;" className="j_skuItem attr251250 attr251092 selected" data-attrname="颜色" data-attrid="251250,251092" data-skuid="10086511497719,10086196916609"><span>单品</span>
                      </a>
                      <a href="javascript:;" className="j_skuItem attr241958 attr241994" data-attrname="颜色" data-attrid="241958,241994" data-skuid="10086768866349,10086636198354"><span>贴心守护</span>
                      </a>
                      <a href="javascript:;" className="j_skuItem attr241966 attr242002" data-attrname="颜色" data-attrid="241966,242002" data-skuid="10086137346753,10086593388928"><span>超级车充</span>
                      </a>
                      <a href="javascript:;" className="j_skuItem attr241972 attr242008" data-attrname="颜色" data-attrid="241972,242008" data-skuid="10086137439137,10086164247453"><span>存储无忧</span>
                      </a>
                      <a href="javascript:;" className="j_skuItem attr241980 attr242014" data-attrname="颜色" data-attrid="241980,242014" data-skuid="10086465290972,10086713134659"><span>照片速印</span>
                      </a>
                      <a href="javascript:;" className="j_skuItem attr241980 attr242014" data-attrname="颜色" data-attrid="241980,242014" data-skuid="10086465290972,10086713134659"><span>静享时光</span>
                      </a>
                    </dd>
                </div>

                <div className="dl">
                    <dt><label>增值</label></dt>
                    <dd>
                        <a href="javascript:;" className="j_skuItem attr251250 attr251092 selected" data-attrname="颜色" data-attrid="251250,251092" data-skuid="10086511497719,10086196916609"><span>无增值服务</span>
                        </a>
                        <a href="javascript:;" className="j_skuItem attr241958 attr241994" data-attrname="颜色" data-attrid="241958,241994" data-skuid="10086768866349,10086636198354"><span>HUAWEI|Mate20类型礼包装服务</span></a>
                      </dd>
                </div>

                <div className="dl">
                    <dt><label>数量</label></dt>
                    <div>
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                </div>

          <div className="xqy-bz">
            <span className="xqy-bz-l">保障</span>
            <div className="xqy-bz-ul">
              <ul>
                <li><a>选购</a></li>
                <li><a>延长服务包</a></li>
                <li><a>碎屏服务包</a></li>
              </ul>
            </div>
            <img className="icon-select-right" src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_header_nav.png"/>
          </div>

          <div className="xqy-bz">
            <span className="xqy-bz-l">免息</span>
            <div className="xqy-bz-ul">花呗/掌上生活分期查询，最高享6期免息</div>
            <img className="icon-select-right" src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_header_nav.png"/>
          </div>

          <div className="xqy-bz">
              <span className="xqy-bz-l">服务</span>
              <div className="xqy-bz-ul">已满48元包邮 华为终端发货&售后</div>
              <img className="icon-select-right" src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_header_nav.png"/>
            </div>

            <div className="dl">
                <dt><label>推荐</label></dt>
                <dd className="ddd">
                    <a href="javascript:;" className="j_skuItem attr251250 attr251092 selected" data-attrname="颜色" data-attrid="251250,251092" data-skuid="10086511497719,10086196916609"><span>HAUWEI|Mate 20X</span>
                    </a>
                    <a href="javascript:;" className="j_skuItem attr241958 attr241994" data-attrname="颜色" data-attrid="241958,241994" data-skuid="10086768866349,10086636198354"><span>HUAWEI|Mate 20 Pro</span></a>
                  </dd>
            </div>

            <div className="xqy-bz">
                <span className="xqy-bz-l"><img src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_replace_grey.png"/></span>
                <div className="xqy-bz-ul">以旧换新  旧机回收最高抵5599元</div>
                <img className="icon-select-right" src="https://res.vmallres.com/nwap/20190215/images/echannelWap/icon/icon_arrow_more.png"/>
              </div>


          <div>
            <div>用户评价</div>
            <div>内容</div>
            <div>查看所有评价</div>
          </div>

          <div>
            <div>规格参数</div>
            <div>查看所有参数</div>
          </div>


          <div className="accordion-content accordion-content-active">
            <p className="p-loading"><span></span></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126272938527.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126272968489.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126273295902.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126282545858.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126282942872.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126284782581.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126284964680.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126286932935.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126288693332.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126289342393.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/20181023212629229664.png" /></p>
            <p><img alt="20181023212629963720.png"
                src="https://res.vmallres.com/pimages/detailImg/2018/11/06/201811061600187340428.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126293402671.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126294362427.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126295260689.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126299121444.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/20181023212630238917.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126301637244.png" /></p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2018/10/23/201810232126302711351.png" /></p>
            <p><br/></p>
            <p></p>
          </div>

        </div>

        <div className="specification" id="otherSpecify">
          <div className="specification-sku">
            <section className="specify">
              <div className="hed">包装清单</div>
              <div className="content">
                <div className="content2">
                  <p></p>
                  <p><span><em>手机 X 1</em><em>电池（内置） X 1</em><em>华为SuperCharge充电器 X
                        1</em><em>Type-C 数据线 X 1</em><em>半入耳式线控耳机 X 1</em><em>TPU保护壳 X 1</em><em>快速指南 X 1</em><em>三包凭证 X
                        1</em><em>取卡针 X 1</em><em>（备注：最终以实物为准）</em></span></p>
                  <p></p>
                </div>
              </div>
            </section>
            <section className="specify">
              <div className="hed">售后服务</div>
              <div className="content">
                <div className="content1">
                  <p></p>
                  <p><span>本产品全国联保，享受三包服务，质保期为：一年质保</span><br/><span
                    >如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7天内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！</span><br/><span
                    >售后服务电话：400-830-8300</span><br/><span><span
                      >华为消费者BG官网： </span><a
                        href="https://consumer.huawei.com/cn/"><span
                        >https://consumer.huawei.com/cn/</span></a></span></p>
                  <p></p>


              </div>
            </div>
            </section>

          </div>
          <section className="specify">
            <div className="hed">特别提醒</div>
            <div className="content">
              <div className="content1">
                <p><span>以上页面中的产品图片及屏幕内容仅作示意，实物产品效果（包括但不仅限于外观、颜色、尺寸）和屏幕显示内容（包括但不仅限于背景、UI、配图）可能略有差异，请以实物为准。</span></p>
                <p>
                  <span>以上页面中的数据为理论值，均来自<em>华为内部实验室</em>，于特定测试环境下所得（请见各项具体说明），实际使用中可能因产品个体差异、软件版本、使用条件和环境因素不同略有不同，请以实际使用的情况为准。</span>
                </p>
                <p>
                  <span>为提供尽可能准确的产品信息、规格参数、产品特性，华为或荣耀可能实时调整和修订以上页面中的文字描述、图片效果等内容，以求与实际产品性能、规格、指数、零部件等信息相匹配，由于产品批次和生产供应因素实时变化，如遇确有进行上述修改和调整必要的情形，恕不专门通知。</span>
                </p>
              </div>
            </div>
          </section>
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
              <div className="gm-l" onClick={this.addCart.bind(this)}>加入购物车</div>
              <div className="gm-r">立即购买</div>
            </div>
        </div>


      </div>
    )
  }
}

export default Details;
