import state from './state.js'
const reducer=(prevstate=state,action)=>{
    console.log('这里是reducer')
    console.log(action)
    let newData={...prevstate}
    console.log(newData)
    switch(action.type){
        case 'change_event':

        newData.todos[0]['title']=action.title
        break;
        default:
        break;
    }
    return newData
}
export default reducer
