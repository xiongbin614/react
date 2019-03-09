import React, { Component } from 'react';
import './index.less';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      userName:'',
      passWord:''
    }
    this.submit=this.submit.bind(this)
  }
  componentDidMount(){
    // console.log(this.props)
  }
  // 点击登录
  submit(){
    let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    let pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
    if (phoneReg.test(Number(this.userinput.value)) && pwdReg.test(this.userpwd.value)){
      // console.log("输入正确")
      this.setState({
        userName: this.userinput.value,
        passWord: this.userpwd.value
      })
      axios.post('http://localhost:3005/users/login',{
        userName: this.userinput.value,
        passWord: this.userpwd.value
      }).then(res=>{
        // console.log(res.data.code)
        if(res.data.code===0){
          // alert("登录成功")
         this.props.history.goBack();
          sessionStorage.setItem("name",this.userinput.value)
        }else{
          alert("用户名或者密码错误 ")
        }
      }).catch(err=>{
        console.log(err)
      })

    }else{
      console.log("输入有误")
      // alert("手机号或者密码错误")
    }
  }
  // 跳转注册页面
  register(){
    // console.log(this.props)
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="login">
          <div className="l-logo">
          <img src="https://hwid1.vmall.com/CAS/up/idmw_rss_29/css/mobile/standard_rss/css/images/wap_login_logo.png" alt=""/>
            <span>华为账号</span>
          </div>
          <div className="l-input">
              <div className="user">
            <input type="text" name="user" ref={(el) => this.userinput = el} placeholder="15880335203" />
              </div>
              <div className="pwd">
            <input type="password" ref={(el) => this.userpwd = el} name="pwd" placeholder="xb123456" id=""/>
                <i>8</i>
              </div>
              <div className="yzm">
                <span>短信验证登录</span>
                <p><span></span><i>记住账号</i></p>
              </div>
              <div className="btn">
            <button onClick={this.submit}>登录</button>
              </div>
              <div className="register">
                  <span onClick={this.register.bind(this)}>注册账号</span>
                  <span>忘记密码</span>
              </div>
              <div className="icons">
                 <span>
                   <img src="https://hwid1.vmall.com/CAS/up/idmw_rss_29/css/mobile/standard_rss/images/wap_qq_emui9.png?cas20190215" alt=""/>
                 </span>
                <span>
                   <img src="https://hwid1.vmall.com/CAS/up/idmw_rss_29/css/mobile/standard_rss/images/wap_alipay_emui9.png?cas20190215" alt=""/>
                </span>
              </div>
              <div className="more" >更多</div> 
          </div>
        <div className="foot">
          <p>继续访问即代表您已同意<span>华为商城协议</span>和<span>华为隐私政策</span></p>
        </div>
      </div>
    )
  }
}

export default Login;