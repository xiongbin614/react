import React from 'react';
import './index.less';
import axios from 'axios';

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
      yzText:'点击按钮进行验证',
      phone:null,
      pwd:''
    }
  }
  // 验证手机号码是否正确
  verifyNumber(){
    let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (phoneReg.test(Number(this.inputVal.value))){
      //文本框内容变化
      this.setState({
        yzText:'输入正确',
        phone: this.inputVal.value
      })
      // 提交注册
     
    }else{
      this.setState({
        yzText: '号码格式不对'
      })
    }
  }
  submit(){
  if(this.state.phone){
    let pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
    if (pwdReg.test(this.pwd.value) || pwdReg.test(this.mypwd.value)){
      if (this.pwd.value === this.mypwd.value){
        axios.post('http://localhost:3005/users/register', {
          userName: this.inputVal.value,
          passWord: this.mypwd.value
        }).then(res => {
          console.log(res.data.code)
          if (res.data.code === 0) {
            alert("注册成功")
            // sessionStorage.setItem("name", this.userinput.value)
          } else {
            alert("用户名或者密码错误ya ")
          }
        }).catch(err => {
          console.log(err)
        })
        console.log("注册成功")
        this.setState({
          pwd: this.mypwd.value
        })
      }else{
        console.log("两次密码不一致")
      }
    }else{
      console.log("密码格式有误")
    }
  }else{
    console.log("请输入正确手机号或者验证手机号")
  }
}

  render(){
    return(
      <div className="register">
        <div className="r-top">
          请使用手机号注册
        </div>
        <div className="r-city">
            <span>国家/地区</span>
            <p>
              <span>中国 +86</span>
              <i>1</i>
            </p>
        </div>
        <div className="phone">
          <div className="phoneCont">
            <input type="text" placeholder="手机号" ref={(el)=> this.inputVal = el} />
          </div>
        </div>
        <div className="r-yz">
          <div className="r-yzCont">
            <span>
              <i></i>
            </span>
            <p onClick={this.verifyNumber.bind(this)}>{this.state.yzText}</p>
          </div>
        </div>
        <div className="dx-yz">
          <div className="dx-input">
              <input type="text" placeholder="短信验证码"/>
              <p>获取验证码</p>
          </div>
        </div>
        <div className="dx-yz">
          <div className="dx-input">
            <input type="text" placeholder="密码" ref={(el) => this.pwd = el} />
            <i>1</i>
          </div>
        </div>
        <div className="dx-yz">
          <div className="dx-input">
            <input type="text" placeholder="确认密码" ref={(el) => this.mypwd = el} />
          </div>
        </div>
        <div className="shuomin">
          至少八个字符，不能包含空格。字母、数字、符号至少包含两种
        </div>
        <div className="borders"></div>
        <div className="fangsi">
          <span>使用邮件地址注册</span>
          <p>若使用邮件地址注册、您仍需为账号提供一个安全
            手机号用于省份验证
          </p>
        </div>
        <div className="pbtn">
          <button className="prev">上一步</button>
          <button className="next" onClick={this.submit.bind(this)}>完成</button>
        </div>
      
      </div>
    )
  }
}

export default Register;
