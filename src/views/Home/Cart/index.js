import React from 'react';
import './index.css';
import Item from './common/item.jsx';
import axios from "axios";
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';


class Cart extends React.Component{
    constructor(props){
      super(props)
      this.state={
        data:[],
        show:'',
        list:[],
        topShow:''
      }
    }
    componentWillMount(){
      if(sessionStorage.length==0){
        localStorage.clear()
      }
      if(localStorage.length>0){
        let local = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")))
        let temparr = []
        for (var i = 0; i < local.length; i++) {
          temparr.push(
            local.find(item => {
              if (local[i].id == Number(item.id)) {
                return item
              }
            })
          )
        }
        this.setState({
          show:'xb-show',
          topShow:'top-show',
          data:temparr
        })
      }
      // axios.get("http://localhost:3005/getInfo/moreinfo").then(res=>{
      //   console.log(res.data[0].data)
      //   var list=[];
      //   for(var j=0;j<this.state.data.length;j++){
      //     list.push(
      //         res.data[0].data.find(items=>{
      //                     if(Number(items.id)===this.state.data.id){
      //                       return items
      //                     }
      //                   })
      //     )
          
      //   }
      //   this.setState({
      //     list:list
      //   })
        
      // })
    }
    componentDidMount(){
      axios.get("http://localhost:3005/getInfo/moreinfo").then(res => {
        // console.log(res.data[0].data)
        var list = [];
        for (var j = 0; j < this.state.data.length; j++) {
          list.push(
            res.data[0].data.find(items => {
              if (Number(items.id) === this.state.data[j].id) {
                return items
              }
            })
          )

        }
        this.setState({
          list: list
        })

      })
    }
    ad(){
      // console.log(this.state.data)
      // console.log(this.state.list)
    }
  render(){
    return(
      <div className="A">
        <header onClick={this.ad.bind(this)}>购物车</header>
        <div className="nav">
          <div className={"kong"+' '+this.state.topShow}>
            <p><i className="iconfont icon-gwc">购物车还没有商品赶紧选购吧！</i></p>
            <p><a href="#">去逛逛</a></p>
          </div>
          {
            this.state.list.map(item=>{
              return(
                <Item data={item} key={item.id}></Item>
              )
            })
          }
          
          {/* <Item></Item> */}
          {/* <Item></Item> */}
          {/* <div   className={" jiesuanFooter"+' '+this.state.show} id="hh" >
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
