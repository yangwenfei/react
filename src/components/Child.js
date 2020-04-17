/*
 * @Author: your name
 * @Date: 2020-04-16 14:23:23
 * @LastEditTime: 2020-04-17 15:47:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Child.js
 */
// 子组件
import React from 'react'
import PropTypes from 'prop-types'
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      header:'子组件信息',
      msg:'父组件需要的子组件数据'
     };
  }
  getParent=()=>{
    console.log(this.props.parent)
  }
  getData=()=>{
    alert('父组件需要调用的子组件方法')
  }
  render() {
    return (
      <div>
        <p>{this.state.header}</p>
        <h3>{this.props.title}</h3>
        <h3>{this.props.num}</h3>
        <button onClick={this.props.run}>调用父组件的run方法</button>
        <button onClick={this.getParent}>获取整个父组件</button>
      </div>
    );
  }
}
Child.defaultProps={
  title:'title默认值'
}
Child.propTypes={
  title:PropTypes.string,
  num:PropTypes.number
}
export default Child;