import React from 'react';
import './ui.less';
import Goods from './comons/ui.jsx';
import Footer from "@/components/ConentFooter/ui.jsx";
import { Carousel, WingBlank, Button } from 'antd-mobile';//轮播图插件
import 'antd-mobile/dist/antd-mobile.css';
import axios from 'axios';
class Huawei extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:[],
    }
    this.getDate()
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(next){
    // console.log(next)
    // console.log(this.props.match.params.id)
    if(next.location.pathname!=this.props.location.pathname){
      this.getDate()
    }
    if (this.props.match.params.id == 'huawei') {
      // console.log(55)
    }
  }
  // 获取数据
  getDate(){
        axios.get('http://localhost:3005/getInfo/find').then(response => {
          let data = response.data[0];
          var arr = [];
          for (let i in data) {
            arr.push(data[i]); //属性
            arr.splice(11,1)
          }
          let name = '';
          if (this.props.match.params.id==='huawei'){
            name ="华为手机"
          } else if (this.props.match.params.id === 'honor'){
            name = "荣耀手机"
          } else if (this.props.match.params.id === 'honornew') {
            name = "笔记本&平板"
          } else if (this.props.match.params.id === 'digital') {
            name = "智能穿戴"
          } 
          let temp = arr.find(item => {
            return item.name === name;
          }).subCategorys.map(item => {
            if (item.type === 3) {
              return item
            }
          })
          for(let i=0;i<temp.length;i++){
            if(temp[i]===undefined){
              temp.splice(i,1);
              i=i-1;
            }
          }
          this.setState({
            list: temp
          })
        }).catch(error => {
          console.log(error)
        })
  }


  render(){
    return(
      
      <div className="huawei">
     
      {/* 轮播图 */}
          <div className="h-banner">
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              dots={true}
            >
              <img src="https://res.vmallres.com/pimages//sale/2019-02/ugfxv1s1vEseKNice2ok.jpg" alt="" />
              <img src="https://res.vmallres.com/pimages//sale/2019-02/6Km8n1Rwe94ttWlNKtsE.jpg" alt="" />
              <img src="https://res.vmallres.com/pimages//sale/2019-02/8Kl2w0EsqEH45Nx6e74B.jpg" alt="" />
              <img src="https://res.vmallres.com/pimages//sale/2019-02/EnaGwaeJbrWGfyhlnzJo.png" alt="" />
            </Carousel>
          </WingBlank>
            {/* {this.props.match.params.id} */}
          </div>
          {/* 导航 */}
          <ul className="h-nav">
            <li>
            <i className={"iconfont iconcategory"+" " +this.props.match.params.id}></i> 
              <span>分类</span>
            </li>
            <li>
            <i className={"iconfont icon-v" + " " + this.props.match.params.id}></i>
              <span>优购码</span>
            </li>
            <li>
            <i className={"iconfont icon-xunhuan" + " " + this.props.match.params.id}></i>
              <span>以旧换新</span>
            </li>
            <li>
            <i className={"iconfont icon-shimingrenzheng" + " " + this.props.match.params.id}></i>
              <span>实名认证</span>
            </li>
            <li>
            <i className={"iconfont icon-app" + " " + this.props.match.params.id}></i>
              <span>APP下载</span>
            </li>
          </ul>
          {/* 两张手机宣传图 */}
          <div className="h-timg">
             <img src="https://res.vmallres.com/pimages//sale/2019-01/tyzwlRcNs4ZyoJB2E1y8.png" alt=""/>
             <img src="https://res.vmallres.com/pimages//sale/2019-02/DSVirP2e7W8cawkrqvBu.png" alt=""/>
          </div>
          {/* 手机电脑等组件 */}
        {
          this.state.list.map(item => {
            return (
              <Goods name={item} key={item.id} ></Goods>
            )
          })
        }
        {this.props.name}
        
        <Footer></Footer>
      </div>
    )
  }
}

export default Huawei;
