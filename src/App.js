/*
 * @Author: your name
 * @Date: 2020-04-02 16:27:10
 * @LastEditTime: 2020-04-13 17:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\src\App.js
 */
import React from 'react';
import logo from './assets/imgs/logo.svg';
import './assets/css/App.css';
import Test from  './components/test'
import News from './components/News'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Test />
     <hr/>
     <News />
    </div>
  );
}

export default App;