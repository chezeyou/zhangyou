import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';
import './login.less'
class Login extends React.Component {
    login = () => {
        console.log(this)
        console.log(this.props.form.getFieldsValue())
        let userName=this.props.form.getFieldsValue().userName
        let path='/admin/'+userName
        this.props.form.validateFields((err,value)=>{
          if(err){
              message.error('用户名或密码错误，请重试！',1)
            }else{
              console.log(value)
              message.success('登录ok3s后自动跳转',3,()=>{
                this.props.history.push(path);
            })
          }
        })
      }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="login">
            <div style={{ 'background': '#ECECEC', padding: '30px' }}>
                <Card title="欢迎登陆" bordered={false} style={{ width: 400 }}>
                  <div className="login-form">
                      <Form.Item>
                        {getFieldDecorator('userName', {
                          rules: [{ required: true, message: '用户名不能为空!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                      </Form.Item>
                      <Form.Item>
                        {getFieldDecorator('password', {
                          rules: [{ required: true, message: '请输入密码!' },{pattern:/^[a-zA-Z0-9_-]{4,12}$/,message:'用户名正则，4到16位（字母，数字，下划线，减号'}],
                          
                        })(
                          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                      </Form.Item>
                      <Form.Item>
                        {getFieldDecorator('remember', {
                          valuePropName: 'checked',
                          initialValue: true,
                        })(
                          <Checkbox>记住密码</Checkbox>
                        )}
                       &nbsp; &nbsp;  &nbsp; &nbsp;
                        <Button type="primary" onClick={this.login} className="login-form-button">
                          登陆
                        </Button>
                        &nbsp; &nbsp;
                        &nbsp; &nbsp;
                        <a  href="http://10.9.48.126:3000/login">忘记密码</a><br/>
                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp;
                        <a href="http://10.9.48.126:3000/login">立即注册</a>
                      </Form.Item>
                    </div>
                </Card>
            </div>  
        </div> 
      )
    }
  }
  
  export default Form.create()(Login);
  