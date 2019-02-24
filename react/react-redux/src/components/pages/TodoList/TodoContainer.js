import React from 'react'
import TodoInput from './TodoInput'
import TodoEvent from './TodoEvent'
import TodoInfo from './TodoInfo'

class TodoContainer extends React.Component{


    render(){
        return(
            <div>
                 todolist
                 <hr/>
                 <TodoInput></TodoInput>
                 <TodoEvent></TodoEvent>
                 <TodoInfo></TodoInfo>
            </div>
        )
    }
}
export default TodoContainer