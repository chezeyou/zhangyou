import React from 'react'
import './header.less'
import {Button} from 'antd'
class Header extends React.Component {
    exdit=()=> {
      console.log(this)
       this.props.history.push('/login')
    }
    render() {
      console.log(this);
      
      return (
        <div className="Header">
            <div className="userInfo">
                <span>欢迎{this.props.id}登录</span>
                <Button type="danger"size='small' onClick={this.exdit}>退出</Button>
            </div>
            <div className="crumb">
                 用户管理/用户修改
            </div>
         
        </div>
      );
    }
  }
  
  export default Header;