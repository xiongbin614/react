import React from 'react';
import './ui.less';

class Huawei extends React.Component{

  render(){
    return(
      <div className="huawei">
          华为{this.props.match.params.id}
      </div>
    )
  }
}

export default Huawei;
