/*
 * @Author: your name
 * @Date: 2020-04-22 10:32:53
 * @LastEditTime: 2020-04-22 10:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Params\News.js
 */
import React from 'react'
import {Link} from 'react-router-dom'
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {
          id:'111',
          title:'新闻11111'
        },
        {
          id:'222',
          title:'新闻222'
        },
        {
          id:'333',
          title:'新闻333'
        },
        {
          id:'444',
          title:'新闻444'
        }
      ]
     };
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <Link to={`/content/${item.id}`} key={index}>
                    <li >{item.title}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default News;