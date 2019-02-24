
import actionCreator from '../../../store/todoStore/actionCreator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
let mapStateToProps=(state)=>{
    return state
}
let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(actionCreator,dispatch)
}
let TodoModule=connect(mapStateToProps,mapDispatchToProps)
export default TodoModule