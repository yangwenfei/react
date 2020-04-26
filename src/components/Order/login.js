/*
 * @Author: your name
 * @Date: 2020-04-23 15:08:05
 * @LastEditTime: 2020-04-23 15:13:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Order\login.js
 */
import React from 'react'
import {Redirect} from 'react-router-dom'
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:false
     };
  }
  goHome=()=>{
    this.setState({
      flag:true
    })
  }
  render() {
    if(this.state.flag){
      return <Redirect to={{pathname:'/'}}></Redirect>
    }
    return (
      <div>
        登录页面
        <button onClick={this.goHome}>返回首页</button>
      </div>
    );
  }
}

export default login;