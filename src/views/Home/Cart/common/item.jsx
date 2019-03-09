import React from "react";
import './itemx.less';
import store from '@/store/xb/index.js';

class Item extends React.Component{
    constructor(props){
      super(props)
      this.state={
        number:1,
        result :0,
        show:"",
        name: store.getState().name,
        id: store.getState().id,
        allChecked:false,//复选框选中条件
        itemcheck:false
      }
    }
    componentWillMount(){
      if(localStorage.length>0){
        this.setState({
          show:'show'
        })
      }
    }
    adc(){
      if(this.state.number!==1){
        this.setState({
          number:this.state.number-=1
        })
        this.state.number--;
      }else{
        // console.log("不能再见里")
      }
    }
    add(){
      this.setState({
        number:this.state.number+=1,
        result: this.state.number * Number(this.price.innerHTML.substr(1))
      })
      // console.log(this.state.result)
    }
    // 全选
  allCheck(){
      this.setState({
        allChecked: !this.state.allChecked
      })
    if (this.state.allChecked){
      this.setState({
        itemcheck:true
      })
    }
    // console.log("55")
    // console.log(this.state.name)
    // console.log(this.state.id)
  }
  // 选中单个
  selectedGoods(){
    // console.log(this.state.number)
    // console.log(Number(this.price.innerHTML.substr(1)))
    this.setState({
      itemcheck: !this.state.itemcheck
    })
    if (this.state.itemcheck){
        this.setState({
          result: this.state.number * Number(this.price.innerHTML.substr(1))
        })
    }
    this.setState({
      result: this.state.number * Number(this.price.innerHTML.substr(1))
    })
  }
  render (){
    return (
      <div className="item">
        <div className="item-cont">
          <input type="checkbox" checked={this.state.itemcheck}  onChange={this.selectedGoods.bind(this)}/>
          <img src={"http://localhost:3005/" + this.props.data.img} alt=""/>
          <div className="names" >
            <div className="top">{this.props.data.name}</div>
            <div className="bottom">
              <div className="prices" ref={el=>this.price=el}>
                {this.props.data.price}
              </div>
              <div className="jisuan">
                  <i onClick={this.adc.bind(this)}>-</i>
                  <span>{this.state.number}</span>
                  <i  onClick={this.add.bind(this)}>+</i>
              </div>
            </div>
          </div>
        </div>
      
        <div className={" jiesuanFooter" + ' ' + this.state.show} id="hh" >
          <div className="check">
            <input type="checkbox" checked={this.state.allChecked} onChange={this.allCheck.bind(this)} name="" id="" />全选
            </div>
          <div className="result">
            <p>总计:</p>
            <span>￥{this.state.result}</span>
            <button>结算(1)</button>
          </div>
        </div>

      </div>
    )
  }
}
export default Item;