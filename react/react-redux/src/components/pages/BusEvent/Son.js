import React from 'react'
import bus from '../../../module/bus'
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state={
            age:16
        }
    }

    componentWillMount(){
        bus.on('add',()=>{
            this.setState({age:17})
        })
    }
    render(){
        return(
            <div>
                 {this.state.age}
            </div>
        )
    }
}
export default Son