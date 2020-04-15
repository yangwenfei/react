/*
 * @Author: your name
 * @Date: 2020-04-14 15:18:05
 * @LastEditTime: 2020-04-14 15:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\event.js
 */
import React from 'react'

// 获取数据，改变数据，执行方法传值 （涉及到三种方式改变方法里的this指向，最常用的肯定是箭头函数）
class Event extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'张三',
      msg:'我是一条msg',
      news:'这是一条新闻'
    }
    this.getMsg=this.getMsg.bind(this)
  }
  run(){
    alert('运行run方法')
  }
  getName(){
    console.log(this) //没有写bind的情况下默认this为 undefined
    alert(this.state.name) 
  }
  getMsg(){
    alert(this.state.msg)
  }
  getNews=()=>{
    alert(this.state.news)
  }
  setName=()=>{ // 修改state的值需要通过setState方法
    this.setState({
      name:'李四'
    })
  }
  setMsg=(str)=>{ // 修改state的值需要通过setState方法
    this.setState({
      msg:str
    })
  }
  render(){
    return(
      <div>
       <p><button onClick={this.run}>点我执行方法</button></p> 
       <p><button onClick={this.getName.bind(this)}>点我获取数据---第一种获取this的方式</button></p>
       <p><button onClick={this.getMsg}>点我获取数据---第二种获取this的方式在构造函数中改变</button></p>
       <p><button onClick={this.getNews}>点我获取数据---第二种获取this的方式箭头函数</button></p>
       <hr />
       <p>{this.state.name}</p>
       <p><button onClick={this.setName}>修改name</button></p>
       <p>{this.state.msg}</p>
       <p><button onClick={this.setMsg.bind(this,'修改后的msg信息内容-----1111')}>执行方法传值</button></p>
      </div>
    )
  }
}
export default Event