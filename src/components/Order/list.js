/*
 * @Author: your name
 * @Date: 2020-04-22 11:31:28
 * @LastEditTime: 2020-04-23 15:07:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Order\list.js
 */
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class list extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[],
      domain:'http://a.itying.com/'
     };
  }
  requestData(){
    let url='http://a.itying.com/api/productlist'
    axios.get(url).then(res=>{
      console.log(res)
      this.setState({
        list:res.data.result
      })
    })
  }
  componentDidMount(){
    this.requestData()
  }
  render() {
    return (
      <div>
         <Link to="/login">登录页面</Link>
        <div className="list">
          {
            this.state.list.map((item,index)=>{
              return (
                <div className='item' key={index}>
                <h3 className="item_cate">{item.title}</h3>
                <ul className="item_list">
                  {
                    item.list.map((value,key)=>{
                      return (
                        <Link key={key} to={`/detail/${value._id}`}>
                        <li >
                          <div className="inner">
                            <img alt={value.title} src={`${this.state.domain}${value.img_url}`} />
                            <p className="title">{value.title}</p>
                            <p className="price">￥{value.price}</p>
                          </div>
                          </li>
                        </Link>
                      )
                    })
                  }
                </ul>
              </div>
              )
            })
          }
        
        </div>
        
      </div>
    );
  }
}

export default list;