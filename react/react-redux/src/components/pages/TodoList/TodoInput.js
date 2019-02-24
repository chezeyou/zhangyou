import React from 'react'
// import React from 'react'
// import actionCreator from '../../../store/todoStore/actionCreator'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import TotoModule from './module'
class TodoInput extends React.Component{
     add=(e)=>{   
        if(e.keyCode===13){
            this.props.addlist(e.target.value)
        }      
    }
    render(){
        console.log(this)
        return(
            <div className='form-group'>
                 <input onKeyUp={this.add} className='form-control' type="text"/>
            </div>
        )
    }
}
//mapstatetoprops
//mapdispacthtoprops
//也是一个函数 可以接受dispatch  可以直接dispath（action） 来触发修改
//返回的方法 可以在props里获取到并且可以直接调用
//可以获取dispath 就不需要在actionCreater里发起修改 只是返回需要的action对象
//return的方法过多的话一样不简单 
// 引入redux的bindActioncreator('要绑定的actionCreator',接受的dispatch)
// 将绑定的actionCreator里的所有方法 返回到props 给用户调用 自动的进行dispatch出发
// let mapDispatchToProps=(dispatch)=>{
//     return{
//         add(val){
//            let action=actionCreator.addlist(val)
//            dispatch(action)
//         }

//     }
// }
// let mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators(actionCreator,dispatch)
// }
// export default connect(state=>state,(dispatch)=>{
//     return bindActionCreators(actionCreator,dispatch)
// })(TodoInput)
// let mapStateToProps=(state)=>{
//     return state
// }
// let mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators(actionCreator,dispatch)
// }
// let test=connect(mapStateToProps,mapDispatchToProps)
export default TotoModule(TodoInput)