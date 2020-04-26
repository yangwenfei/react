/*
 * @Author: your name
 * @Date: 2020-04-23 15:38:14
 * @LastEditTime: 2020-04-23 15:51:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\NestedRouting\Home.js
 */
import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:''
     };
  }
  render() {
    return (
      <div>
        首页组件
      </div>
    );
  }
}

export default Home;