import React from 'react'
import store from '../../../store/store'
class Expression extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:store.getState().calculatorStore.resultNum
        }
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({result:store.getState().calculatorStore.resultNum})
        })
    }
    render(){
        let result=this.state.result
        console.log('----------',result)
        return(
            
            <div>
              
                  <input type="text" className='form-control' value={result}/>
                  
            </div>
        )
    }
}
export default Expression