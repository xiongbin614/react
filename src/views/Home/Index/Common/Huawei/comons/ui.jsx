import React from 'react';
import './ui.less';
class Goods extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="i-goods" >
          <div className="g-title">
              <div className="g-ggs">
                <i></i>
                <span>{this.props.name.name}</span>
                <i></i>
              </div>
          </div>
          <ul className="g-showGoods">
              {
            this.props.name.subCategorys.map(item=>{
              return(
                <li>
                  <img src={'https://res0.vmallres.com/pimages/' + item.photoPath + item.photoName} alt=""/>
                  <p key={item.name} className="p-name">{item.name}</p>
                  <p className="p-promotion">赠品质好礼</p>
                  <p className="p-price">￥1300</p>
                </li>
              )
            })
              }
            
            
           
          </ul>
      </div>
    )
  }
}

export default Goods;