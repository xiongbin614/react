import React from "react";
import './itemx.less';

class Item extends React.Component{
    constructor(props){
      super(props)
      this.state={
        number:1,
        result :0,
        allChecked:false//复选框选中条件
      }
    }
    adc(){
      if(this.state.number!==1){
        this.setState({
          number:this.state.number-=1
        })
        this.state.number--;
      }else{
        console.log("不能再见里")
      }
    }
    add(){
      this.setState({
        number:this.state.number+=1
      })
    }
    // 全选
  allCheck(){
      this.setState({
        allChecked: !this.state.allChecked
      })
    console.log("55")
  }
  // 选中单个
  selectedGoods(){

  }
  render (){
    return (
      <div className="item">
        <div className="item-cont">
          <input type="checkbox"  onChange={this.selectedGoods.bind(this)}/>
          <img src="https://res.vmallres.com/pimages/product/6901443260225/428_428_1539222514790mp.png" alt=""/>
          <div className="names" >
            <div className="top">华为p20</div>
            <div className="bottom">
              <div className="prices">
               ￥3900
              </div>
              <div className="jisuan">
                  <i onClick={this.adc.bind(this)}>-</i>
                  <span>{this.state.number}</span>
                  <i  onClick={this.add.bind(this)}>+</i>
              </div>
            </div>
          </div>
        </div>
      
        <div className="jiesuanFooter">
          <div className="check">
            <input type="checkbox" checked={this.state.allChecked} onChange={this.allCheck.bind(this)} value="null"/>全选
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