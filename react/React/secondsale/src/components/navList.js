import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
class Nav extends Component {
    constructor() {
        super();
        
        let arr=[{
            title:'首页',
            path:'/admin/home',
            id:'1'
          },
          {
            title:'数据统计',
            path:'/admin/data',
            id:'2',
            children:[
              {title:'数据条形图',
              id:'1-1',
              children:[{title:'条形图1',
              path:'/admin/bar1',
              id:'1-1-1'},
              {title:'条形图2',
              path:'/admin/bar2',
              id:'1-1-2'},
              {title:'条形图3',
              path:'/admin/bar3',
              id:'1-1-3'}]
            },
              {title:'数据折线图',
              id:'1-2',
              children:[{title:'折线图1',
              path:'/admin/line1',
              id:'1-2-1'},
              {title:'折线图2',
              path:'/admin/line2',
              id:'1-2-2'},
              {title:'折线图3',
              path:'/admin/line3',
              id:'1-2-3'}]
            },
              {title:'数据饼状图',
              id:'1-3',
              children:[{title:'饼状图1',
              path:'/admin/bie1',
              id:'1-3-1'},
              {title:'饼状图2',
              path:'/admin/bie2',
              id:'1-3-2'},
              {title:'饼状图3',
              path:'/admin/bie3',
              id:'1-3-3'}]
            },
            ]
          },
          {
            title:'商品管理',
            path:'/admin/goods',
            id:'3',
            children:[
              {
                title:'商品列表',
                path:'/admin/goods/list',
                id:'4'
              },
              {
                title:'商品添加',
                path:'/admin/goods/add',
                id:'5'
              },
              {
                title:'商品修改',
                path:'/admin/goods/update',
                id:'6'
              },
            ]
          },
          {
            title:'banner管理',
            path:'/admin/banner',
            id:'7',
            children:[
              {
                title:'banner列表',
                path:'/admin/banner/list',
                id:'8'
              },
              {
                title:'banner添加',
                path:'/admin/banner/add',
                id:'13'
              },
              {
                title:'banner修改',
                path:'/admin/banner/update',
                id:'14'
              },
            ]
          },
          {
            title:' 用户管理',
            path:'/admin/users',
            id:'9',
            children:[
              {
                title:'用户列表',
                path:'/admin/users/list',
                id:'10'
              },
              {
                title:'用户添加',
                path:'/admin/users/add',
                id:'11'
              },
              {
                title:'用户修改',
                path:'/admin/users/update',
                id:'12'
              },
            ]
          }]
       
        this.state={arr, collapsed: false };
    }
    
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
        console.log(this.state.collapsed)
      }
    //递归实现多级菜单
    renderList() {
        let list=this.state.arr
        return this.renderMenue(list)
    }
    renderMenue(arr) {
        return arr.map((item)=>{
            if(item.children){
                return(
                    <SubMenu key={item.id} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                        {this.renderMenue(item.children)}
                   </SubMenu>
                )

            }else{
                return  <Menu.Item key={item.id}>
                            <Icon type="pie-chart" />
                            {item.title}
                            <Link to={item.path}>{item.title}</Link>
                        </Menu.Item>
            }
        })
    }
    render() {
        return (
            <div style={{ width: 256 ,height: 600 }}>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['3']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                
               {this.renderList()}
              </Menu>
            </div>
          );
        }
      }
      
  
  export default Nav;
  