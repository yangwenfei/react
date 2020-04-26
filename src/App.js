/*
 * @Author: your name
 * @Date: 2020-04-02 16:27:10
 * @LastEditTime: 2020-04-23 15:55:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\src\App.js
 */
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
// import logo from './assets/imgs/logo.svg';
import './assets/css/App.css';
// import Test from  './components/test'
// import News from './components/News'
// import Event from './components/event'
// import EventObj from './components/eventObj'
// import Form from './components/form'
// import Parent from './components/Parent'
// import Axios from './components/Axios'
// import FetchJsonP from './components/FetchJsonP'
// import LifeCycle from './components/LifeCycle'
// import Router1 from './components/Router/Router1'
// import Router2 from './components/Router/Router2'
// import News from './components/Params/News'
// import Content from './components/Params/Content'
// import list from './components/Order/list'
// import detail from './components/Order/detail'
// import login from './components/Order/login'
import Home from './components/NestedRouting/Home'
import User from './components/NestedRouting/User'
import { Link } from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <Test />
     <hr/>
     <News /> */}
     {/* <Event/> */}
     {/* <EventObj/> */}
     {/* <Form/> */}
     {/* <Parent/> */}
     {/* <Axios/> */}
     {/* <FetchJsonP/> */}
     {/* <LifeCycle/> */}
     {/* <header>
       <Link to='/router1'>router1页面</Link>
       <Link to='router2'>router2页面</Link>
     </header>
      <hr/>
      <Route path='/router1' component={Router1}></Route>
      <Route path='/router2' component={Router2}></Route> */}

{/* 
      <Route exact path="/" component={News}></Route>
      <Route path='/content/:id' component={Content}/> */}

      {/* <Route exact path="/" component={list}></Route>
      <Route path='/detail/:id' component={detail}/> 
      <Route path='/login' component={login}></Route> */}
      <header className="header">
      <Link to="/home">首页</Link>
      <Link to='/user'>用户</Link>
      </header>
      <Route path='/home' component={Home}/>
      <Route path='/user' component={User}/>
    </div>
    </Router>
    
  );
}

export default App;
