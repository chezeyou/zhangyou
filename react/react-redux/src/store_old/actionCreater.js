import store from './index'
const actionCreator={
    changeEvent(params){
        console.log(store)
        let action={
            type:'change_event',
            title:params
        }
        store.dispatch(action)

        console.log('触发actionCreator'+params)
    }
}
export default actionCreator