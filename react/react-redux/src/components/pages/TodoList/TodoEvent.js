import React from 'react'
import TodoModule from './module'
class TodoEvent extends React.Component{

    delete(id){

       this.props.delete(id)
    }
    finish(id){
        // console.log(111)
      this.props.finish(id)
    }
    renderList(){
       let {todolist}=this.props.todoStore
       console.log(todolist)
       return todolist.map((item)=>{
           return <li className='list-group-item' key={item.id}>
                    {item.title}
                    <button className='btn btn-danger' onClick={this.delete.bind(this,item.id)}>删除</button>
                    {item.isFinish?'已完成':<button className='btn btn-success' onClick={this.finish.bind(this,item.id)} >完成</button>}
                 </li>
       })
    }
    
    render(){
        console.log('------')
         console.log(this)
        return(
            <div>
                 <ul className='list-group'>
                    {this.renderList()}
                 </ul>
            </div>
        )
    }
}
//connect(mapStateToProps)
// connect方法根据传入的ui组件产生一个容器组件，ui组件和容器组件形成嵌套关系
// connect 第一参数mapStateToProps 也是一个函数  能接受在provider中传入的store 中的state值
// 将state 进行返回 返回到当前ui组件的props
// 在ui组件中获取全局状态值就不需要通过store.getState（）进行获取
// 在ui组件中不需要通过store.subscribe进行数据监听
// let mapStateToProps=(state)=>{
//     return state
// }
//connent 第二个参数也是一个函数  在这个函数里边可以接受dispatch
// let mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators(actionCreator,dispatch)
   
// }
export default TodoModule(TodoEvent)