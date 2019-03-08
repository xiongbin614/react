import React from 'react';
import './index.less';
import {  NavLink} from 'react-router-dom';

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
                  <NavLink to={"/details?id="+item._id}>          
                    <img src={'https://res0.vmallres.com/pimages/' + item.photoPath + item.photoName} alt="" />
                    <p>{item.name}</p>
                  </NavLink>
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