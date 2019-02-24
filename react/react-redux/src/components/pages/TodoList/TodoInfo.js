import React from 'react'
import TodoModule from './module'
class TodoInfo extends React.Component{
    

    render(){

        let todolist=this.props.todoStore.todolist
        let info={
            all:todolist.length,
            yes:0,
            no:0
        }
        for (let index = 0; index < todolist.length; index++) {
           if(todolist[index].isFinish){
            info.yes++ 
           }else{
               info.no++
           }
            
        }
        return(
           <div className='alert alert-info'>
               共<label className='label label-primary'>{info.all}</label>天数据
               完成<label className='label label-primary'>{info.yes}</label>条数据
               未完成<label className='label label-primary'>{info.no}</label>条数据
           </div>
        )
    }
}
export default TodoModule(TodoInfo)