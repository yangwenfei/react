/*
 * @Author: your name
 * @Date: 2020-04-22 10:33:01
 * @LastEditTime: 2020-04-22 11:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\Params\Content.js
 */
import React from 'react'
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id:''
     };
  }
  componentDidMount=()=>{
    //获取动态路由传过来的参数
    console.log(this.props.match)
    this.setState({
      id:this.props.match.params.id
    })
  }
  render() {
    return (
      <div>
        新闻详情组件{this.state.id}
      </div>
    );
  }
}

export default Content;