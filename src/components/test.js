/*
 * @Author: your name
 * @Date: 2020-04-13 15:10:44
 * @LastEditTime: 2020-04-13 16:01:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\src\components\test.js
 */
import React from 'react'

class Test extends React.Component{
  // 子类必须在construction中调用super方法，否则新建实例时会报错，因为子类没有自己的this对象，需要继承父类的this对象
 constructor(props){ 
   super(props); // super用户父子组件传值
   this.state={  //构造器中定义数据
    name:'张三',
    age:'30',
    title:'title 属性',
    style:{
      color:'purple',
      fontSize:'40px'
    }
   }
 }
  render(){ // render方法里写的是jsx语法 。js与html混写类似于vue的template
    return (
      //根节点必须的
      <div>
        <div>
        <p>tetete</p>
         {/* <!--绑定数据的写法 --> */}
        <p>姓名----{this.state.name}</p> 
        <p>年龄----{this.state.age}</p>
        </div>
        
        <ul>
          <li title={this.state.title}>绑定属性上的数据</li>
          <li className="red">class样式属性的写法</li>
          <li style={{'color':'green','fontSize':'20px'}}>react中行内样式写法</li>
          <li style={this.state.style}>style样式数据在state中定义</li>
        </ul>
      </div>
      
    )
  }
}
export default Test