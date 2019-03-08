import React from 'react';
import './index.less';
import axios from 'axios';
import Item from './common/index.jsx'
// import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';


class Classify extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      initdata:{},
      color:'color:bisque'
    }
    this.init()
  }
  // 组件挂载之前
  componentWillMount(){
    this.getDate()
  }
  // 组件挂载之后
  componentDidMount(){
    console.log(this.state.initdata)
  }
  // 点击切换
  toggle(val){
    console.log(val)
    console.log(this.state.data)
    this.setState({
      initdata:this.state.data.find(item=>{
        if(item.name===val){
          return item;
        }
      })
    })

  }
  colors(){

  }

  // 获取数据
  getDate(){
    axios.get('http://localhost:3005/getInfo/find').then(data=>{
      let tempArr=[];
      for (var i in data.data[0]){
        if(i!=="_id"){
          tempArr.push(data.data[0][i])
        }else{
          return
        }
        this.setState({
          data: tempArr
        })
        console.log(this.state.data)
      }
    })
  }

  init() {
    axios.get('http://localhost:3005/getInfo/find').then(data => {
      let tempArr = [];
      for (var i in data.data[0]) {
        if (i !== "_id") {
          tempArr.push(data.data[0][i])
        } else {
          return
        }
        this.setState({
          initdata: tempArr.find(item=>{
            return item.name==="为您推荐"
          })
        })
        console.log(this.state.data)
      }
    })
  }
  render(){
    return(
            <div className="Classify">
                <div className="c-top">
                    <div className="c-input">
                      <i className="iconsearch iconfont"></i>
                          <div className="c-search">
                            荣耀Magic2
                          </div>
                        </div>
                      <i className="iconfont iconxiaoxi"></i>
                </div>
                <div className="c-bottom">
                    <div className="c-left">
                      <ul>
                        {
                          this.state.data.map(item=>{
                            return(
                              <li key={item.name} onClick={this.toggle.bind(this,item.name)}>
                                <span  onClick={this.colors.bind(this)}>{item.name}</span>
                              </li>
                            )
                          })
                        }
                        
                      </ul>
                    </div>
                    <div className="c-right">
                    {/* 开始渲染 */}
                    {
              this.state.initdata.subCategorys && this.state.initdata.subCategorys.map(item=>{
                  return(
                    <Item key={item.name} id={item}></Item>
                    // <p>{item.name}</p>

                  )
              })
                    }

            
                        {/* <div className="showItem">
                            <p className="p-title">华为手机</p>
                            <ul>
                              <li>
                              <img src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" alt=""/>
                               <p>华为手机</p> 
                              </li>
                              <li>
                              <img src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" alt=""/>
                               <p>华为手机</p> 
                              </li>
                              <li>
                              <img src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" alt=""/>
                               <p>华为手机</p> 
                              </li>
                              <li>
                              <img src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" alt=""/>
                               <p>华为手机</p> 
                              </li>
                            </ul>
                        </div> */}




                    </div>
                </div>
            </div>
    )
  }
}





export default Classify;