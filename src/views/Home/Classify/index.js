import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';


class Classify extends React.Component{
    constructor (prpos) {
        super(prpos)
        this.state ={
            data: [],
            name:'',
            list:[]
        }
        Axios.get('http://10.36.132.216:3005/getInfo/find').then(res => {
            console.log(res)
            let arr=[];
            for(let i in res.data[0]){
                arr.push(res.data[0][i])
                arr.splice(11,1)
            }
            this.setState({
                data: arr
                
            })
        })
    }
    componentDidUpdate(){
        console.log(this.state.data)

        
    }


    get(){
        console.log(this.state.data)
    }
    tz(val){
        console.log(val)
    
        this.setState({
            name:val,
            list:this.state.data.find(item=>{
                console.log(item.name)
                if(item.name===val){
                    return item
                }
            })
        })
    }
    bb(){
        console.log(this.state.list)
    }

  render(){
    return(
        <div className="classify">
            

        </div>
    )
  }
}

ReactDOM.render(
    <Classify />,
    document.getElementById('root')
  )

export default Classify;
