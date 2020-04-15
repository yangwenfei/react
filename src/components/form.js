/*
 * @Author: your name
 * @Date: 2020-04-15 11:26:08
 * @LastEditTime: 2020-04-15 15:35:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\components\form.js
 */
//react 表单：单选框、复选框、下拉框、textarea
import React from 'react'
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      sex:'1',
      city:'广东',
      citys:[
        '上海',
        '北京',
        '广东'
      ],
      hobys:[
        {title:'吃饭',value:true},
        {title:'睡觉',value:true},
        {title:'玩游戏',value:true}
      ],
      info:''
    }
  }
  submit=(e)=>{
    e.preventDefault() //阻止默认事件
    console.log(this.state.name,this.state.sex,this.state.city,this.state.hobys,this.state.info)
  }
  handleName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleSex=(e)=>{
    this.setState({
      sex:e.target.value
    })
  }
  handleCity=(e)=>{
    this.setState({
      city:e.target.value
    })
  }
  handleHobby=(index)=>{
    let newArr=this.state.hobys
    newArr[index].value=!newArr[index].value
    this.setState({
      hobys:newArr
    })
  }
  handleInfo=(e)=>{
    this.setState({
      info:e.target.value
    })
  }
    render(){ 
        return(
          <div>
            <h3>react form表单</h3>
            <form onSubmit={this.submit}>
             姓名： <input value={this.state.name} onChange={this.handleName}/> <br/><br/>
             性别： <input type='radio' value="1" checked={this.state.sex==='1'} onChange={this.handleSex}/>男
                    <input type='radio' value='2' checked={this.state.sex==='2'} onChange={this.handleSex}/>女 <br/><br/>
            居住城市：<select value={this.state.city} onChange={this.handleCity}>
                      {
                        this.state.citys.map((item,index)=>{
                        return <option key={index}>{item}</option>
                        })
                      }
                     </select><br/><br/>
            兴趣爱好：
                    {
                      this.state.hobys.map((item,index)=>{
                        return (
                          <span key={index}>
                          <input type="checkBox"  checked={item.value} onChange={this.handleHobby.bind(this,index)}/> {item.title}
                          </span>
                        )
                      })
                    }<br/><br/>
              备注：<textarea value={this.state.info} onChange={this.handleInfo}></textarea><br/><br/>
              <input type="submit" value='提交'/>
            </form>
          </div>
        )
   }
}
export default Form
