/*
 * @Author: your name
 * @Date: 2020-04-23 15:38:23
 * @LastEditTime: 2020-04-26 14:17:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\NestedRouting\User.js
 */
import React from 'react'
import UserCenter from './UserCenter'
import UserInfo from './UserInfo'
import {Link,Route} from 'react-router-dom'
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:'用户'
     };
  }
  render() {
    return (
      <div>
        <div className="content">
          <div className="left">
            <Link to='/user/'>用户中心</Link> <br></br>
            <Link to='/user/info'>用户信息</Link>
          </div>
          <div className="right">
           <Route exact path="/user/" component={UserCenter}></Route>
           <Route path="/user/info" component={UserInfo}></Route>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
