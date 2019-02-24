
import {combineReducers} from 'redux'
import todoStore from './todoStore/reducer'
import calculatorStore from './calculatorStore/reducer'
//真正的reducer
const reducer = combineReducers({
    todoStore,calculatorStore
})

export default reducer