/*
 * @Author: your name
 * @Date: 2020-04-16 14:23:14
 * @LastEditTime: 2020-04-16 17:27:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Parent.js
 */
import React from 'react'
import Child from './Child'
 // 父子组件传值
 /**
  * 父组件给子组件传值
  * 父组件不仅可以给子组件传值，还可以给子组件传方法，以及把整个父组件传给子组件
  */
 class Parent extends React.Component {
   constructor(props) {
     super(props);
     this.state = { 
       msg:'以下是父组件的内容',
       title:'父组件传到子组件的参数title'
      };
   }
   run=()=>{
     alert('父组件的run方法')
   }
   getchildFun=()=>{
     this.refs.child.getData()
   }
   getChildDate=()=>{
    alert(this.refs.child.state.msg) 
   }
   render() {
     return (
      <div>
        <Child ref='child' title={this.state.title} run={this.run} parent={this}/>
        <hr/>
        <p>{this.state.msg}</p>
        <button onClick={this.getChildDate}>父组件中获取子组件的值</button>
        <button onClick={this.getchildFun}>父组件中执行子组件的方法</button>
      </div>
     )
   }
 }
 
 export default Parent;