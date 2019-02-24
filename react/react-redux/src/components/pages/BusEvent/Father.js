import React from 'react'
import bus from '../../../module/bus'
import store from '../../../store/index'
import actionCreator from '../../../store/actionCreater'
class Father extends React.Component{
    constructor(props){
        super(props)
        console.log('------')
        console.log(store.getState())
        this.state={
            todos:store.getState().todos
        }
    }
    componentWillMount(){
        console.log(store)
        store.subscribe(()=>{
            console.log('store数据改变')
            this.setState({todos:store.getState().todos})
        })
    }
    chageSon(){
        actionCreator.changeEvent('看电影')
    //    bus.emit('add')
    }
    render(){
        return(
            <div>
                <p>这里是react模拟事件总线</p>
                <button onClick={this.chageSon}> 点击增加</button>
                {this.state.todos[0]['title']}
            </div>
        )
    }
}
export default Father