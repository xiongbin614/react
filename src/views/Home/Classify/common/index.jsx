import React from 'react';
import './index.less';
class Item extends React.Component{
  componentDidMount(){
    console.log(this.props.initdata)
  }
  render(){
    return(
      <div className="showItem">
        <p className="p-title">{this.props.id && this.props.id.name}</p>
        <ul>
          {
            this.props.id.subCategorys && this.props.id.subCategorys.map(item=>{
              return(
                <>
                  <li>
                    
                    <img src={'https://res0.vmallres.com/pimages/' + item.photoPath + item.photoName} alt="" />
                    <p>{item.name}</p>
                  </li>
                </>
              )
            })
          }
        </ul>
      </div>

    )
  }
}
export default Item;