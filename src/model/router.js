/*
 * @Author: your name
 * @Date: 2020-04-26 15:20:58
 * @LastEditTime: 2020-04-26 15:50:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\model\router.js
 */
import Home from '../components/NestedRouting/Home'
import User from '../components/NestedRouting/User'
import UserCenter from '../components/NestedRouting/UserCenter'
import UserInfo from '../components/NestedRouting/UserInfo'
const routes=[
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/user',
    component:User,
    routes:[
      {
        path:'/user/',
        component:UserCenter
      },
      {
        path:'/user/info',
        component:UserInfo
      }
    ]
  }
]

export default routes