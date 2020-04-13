/*
 * @Author: your name
 * @Date: 2020-04-13 17:12:17
 * @LastEditTime: 2020-04-13 17:21:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\src\components\News.js
 */
import React from 'react'
// 数组循环的写法
class News extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list1:['1111','2222'],
      list2:[
        {title:'新闻列表1111'},
        {title:'新闻列表2222'}
      ]
    }
  }
  render(){
    var listResut=this.state.list1.map((item,index)=>{
    return <li key={index}>{item}</li>
    }
    )
    return (
      <div>
        <p>列表1</p>
        <ul>
          {listResut}
        </ul>
        
        <p>列表二</p>
        <ul>
          {
            this.state.list2.map((item,index)=>{
            return <li key={index}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default News