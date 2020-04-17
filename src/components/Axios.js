/*
 * @Author: your name
 * @Date: 2020-04-17 16:24:57
 * @LastEditTime: 2020-04-17 16:34:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Axios.js
 */
import React from 'react'
import axios from 'axios'
class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[]
     };
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

export default Axios;
