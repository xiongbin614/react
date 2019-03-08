import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';
import axios from "axios";

class MoreGoods extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3005/getInfo/moreinfo").then(res=>{
      this.setState({
        data:res.data[0].data
      })
    })
  }
  hh(){
    console.groupCollapsed(this.state.data)
  }
  render(){
    return(
      <div className="moreGoods">
        <div className="header">
          <div className="m-header">
            <NavLink to="/">1</NavLink><span onClick={this.hh.bind(this)}>手机</span>
          </div>
          <div className='m-nav'>
            <ul className="m-sort">
              <li>最新</li>
              <li>人气</li>
              <li>价格</li>
              <li>评价</li>
            </ul>
           </div>
          </div>
          <div className="content">
            <ul>
              {
                this.state.data.map(item=>{
                  return(
                    <NavLink to={"/details?id="+item.id}>
                      <div className="left-img">
                        <img src={"http://localhost:3005/" + item.img} alt="" />
                      </div>
                      <div className="right-title">
                        <div className="top">
                          <h4>{item.name}</h4>
                          <p>{item.describe}</p>
                        </div>
                        <div className="bottom">
                          {item.price}
                  </div>
                      </div>
                    </NavLink>
                  )
                })
              }
            </ul>
          </div>
      </div>
    )
  }
}

export default MoreGoods;