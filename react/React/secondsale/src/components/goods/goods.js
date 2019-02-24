import React from 'react'
import { Card,Table,Pagination,Button } from 'antd';
import './goods.less'
class Goods extends React.Component {
  constructor() {
    super();
    this.state={
      arr:[]
    }
  }
  componentWillMount() {
    this.$axios.get(' https://www.easy-mock.com/mock/5c31e2372188f1589db6ae29/example/getGoods')
    .then((res)=>{
      console.log(res)
      if(res.err===0){
      this.setState({arr:res.data})
      console.log(res.data)
      }
    })
  }
  pageChange=(pageNumber)=>{
    console.log('Page: ', pageNumber);
    this.$axios.get(' https://www.easy-mock.com/mock/5c31e2372188f1589db6ae29/example/getGoods2')
    .then((res)=>{
      if(res.err===0){
        this.setState({arr:res.data})
      }
    })
    
  }
  del() {

  }
  upset() {

  }
  render() {
    const columns = [{
      title: '商品名称',
      dataIndex: 'name',
      width: 150,
      render: text => <a href="http://10.9.48.126:3000">{text}</a>,
    }, {
      title: '商品价格 ',
      dataIndex: 'price',
      width: 100,
      sorter(a,b){
        return a.price-b.price
    } 
    }, {
      title: '商品类型',
      dataIndex: 'type',
      width: 120,
    }, {
      title: '商品描述',
      dataIndex: 'desc',
      width: 200,
    
    }, {
      title: '商品图片',
      dataIndex: 'imgPath',
      width: 150,
    }, {
      title: '商品操作',
      dataIndex: 'operation',
      width: 120,
      fixed: 'right',
      render:()=>{
        return (
            <div>
                <Button size='small' type='danger' onClick={this.del()}>删除</Button>
                <Button size='small' type='primary' onClick={this.upset()}>修改</Button>
            </div>
        )
      }
   }
  ];
    
    
    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    
    return (
      <div className="goods">
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="商品列表" bordered={false} style={{ width:800 }}>
            <Table bordered pagination={false} scroll={{y:300,x:890}} rowSelection={rowSelection} columns={columns} dataSource={this.state.arr} />,
            <Pagination showQuickJumper defaultCurrent={1} total={8} pageSize={4} onChange={this.pageChange} />,
          </Card>
        </div>
      </div>
    );
  }
}
  
  export default Goods;