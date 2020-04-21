/*
 * @Author: your name
 * @Date: 2020-04-17 16:24:57
 * @LastEditTime: 2020-04-20 16:44:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Axios.js
 */
import React from 'react'
import fetchJsonp from 'fetch-jsonp'
class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[]
     };
  }
  getData=()=>{
    let url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
    fetchJsonp(url)
    .then(function(response) {
      return response.json()
    }).then((json)=> {
      console.log('parsed json', json)
      this.setState({
        list:json.result
      })
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
  render() {
    return (
      <div>
        <h2>通过Fetch-Jsonp获取数据</h2>
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
