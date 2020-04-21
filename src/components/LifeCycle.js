/*
 * @Author: your name
 * @Date: 2020-04-17 16:24:57
 * @LastEditTime: 2020-04-21 10:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Axios.js
 */
import React from 'react'
import axios from 'axios'
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[]
     };
     console.log('01lifeCycle构造函数')
  }
  componentWillMount=()=>{
    console.log('02组件将要挂载触发的生命生命周期函数')
  }
  componentDidMount=()=>{
    // dom操作，数据请求都是放在DidMount里
    this.getData()
    console.log('04组件挂载完成时执行的生命周期函数')
  }
  shouldComponentUpdate=()=>{
    // 这个方法必须要要有返回值true或false。true---更新数据、 false---不进行数据更新
    console.log('A1---数据是否进行更新')
    return true
  }
  componentWillUpdate=()=>{
    console.log('A2--------数据将要更新时执行的生命周期函数')
  }
  componentDidUpdate=()=>{
    console.log('A4--------数据更新完成时执行的生命周期函数')
  }
  componentWillUnmount=()=>{
    console.log('组件销毁时触发的函数')
  }
  getData=()=>{
    let url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
    axios.get(url)
    .then((response)=>{
      let data=response.data
      this.setState({
        list:data.result
      })
    })
    .catch((error)=>{
      console.log(error)
    });
  }
  render() {
    console.log('03 render函数，A3---render函数')
    return (
      <div>
        <h2>通过Aaxios获取数据</h2>
        <button onClick={this.getData}>获取数据</button>
        <hr/>
        <ul>
          {
            this.state.list.map((item,index)=>{
            return <li key={index}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default LifeCycle;
