/*
 * @Author: your name
 * @Date: 2020-04-14 16:15:14
 * @LastEditTime: 2020-04-15 13:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\eventObj.js
 */
//事件对象、键盘事件、表单事件、ref获取dom节点、React实现类似vue的双向数据绑定
/**
 * 事件对象的主要作用是获取dom节点
 */
import React from 'react'

class EventObj extends React.Component{

  constructor(props){
    super(props)
    this.state={
      msg:"1111",
      inputValue:'',
      username:'',
      date:'eeee'
    }
  }
  getTage(e){
    console.log(e) // 事件对象
    e.target.style.background='red'
  }
  inputChange=(e)=>{
    console.log(e.target) // dom节点
   let value= e.target.value 
   console.log(value)
   this.setState({
     inputValue:value
   })
  }
  getInputValue=()=>{
    alert(this.state.inputValue)
  }
  inputRef=()=>{
    let value=this.refs.username.value
    this.setState({
      username:value
    })
    console.log(value)
  }
  getRefValue=()=>{
    alert(this.state.username)
  }
  changeDate=(e)=>{
    this.setState({
      date:e.target.value
    })
  }
  render(){
    return(
      <div>
          <button onClick={this.getTage}>事件对象</button>
          <hr/>
          <input onChange={this.inputChange}/><button onClick={this.getInputValue}>获取input框的值</button>
          <hr/>
          <input ref='username' onChange={this.inputRef}/> <button onClick={this.getRefValue}>通过ref获取DOM节点</button>
          <hr/>
          <h2>实现双向数据绑定MVVM</h2>
          {/* model改变影响view，view改变影响model （MVVM）
           如果需要实现mvvvm 数据绑定及动态修改，使用value（约束性组件）
          */}
          <input value={this.state.date} onChange={this.changeDate}/>
          {this.state.date}
          {/* MV的过程
            如果只想获取model数据，不进行改变，使用defaultValue （非约束性组件）
           */}
          <input defaultValue={this.state.date} />

      </div>
    )
  }
}

export default EventObj