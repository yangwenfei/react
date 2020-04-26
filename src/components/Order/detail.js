/*
 * @Author: your name
 * @Date: 2020-04-22 11:31:36
 * @LastEditTime: 2020-04-23 15:07:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Order\detail.js
 */
// dangerouslySetInnerHTML={{__html:this.state.list.content}} ：解析html标签
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:{},
      domain:'http://a.itying.com/'
     };
  }
  requestData(id){
    let url='http://a.itying.com/api/productcontent?id='+id
    axios.get(url).then(res=>{
      console.log(res)
      this.setState({
        list:res.data.result[0]
      })
    })
  }
  componentDidMount(){
    let id=this.props.match.params.id
    this.requestData(id)
  }
  render() {
    return (
      <div className="">
        <Link to="/"> <div className="back">返回</div></Link>
        <div className="p_content">		
          <div className="p_info">				
          <img alt={this.state.list.title} src={this.state.list.img_url?`${this.state.domain}${this.state.list.img_url}`:''} />
            <h2>{this.state.list.title}</h2>				
            <p className="price">{this.state.list.price}/份</p>
          </div>
          <div className="p_detial">
            <h3>
              商品详情					
            </h3>
            <div className="p_content" dangerouslySetInnerHTML={{__html:this.state.list.content}}> 
            
            </div>
          </div>
        </div>
        
        
        <footer className="pfooter">
          
          <div className="cart">				
            <strong>数量:</strong>
            <div className="cart_num">
                  <div className="input_left">-</div>
                  <div className="input_center">
                      <input type="text"  readOnly value="1" name="num" id="num" />
                  </div>
                  <div className="input_right">+</div>				      
                </div>								
          
          </div>
          
          <button className="addcart">加入购物车</button>			
        </footer>
        
    </div>
    );
  }
}

export default detail;