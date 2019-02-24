import React from 'react'
import store from '../../../store/store'
import actionCreator from '../../../store/calculatorStore/actionCreator'
class Expression extends React.Component{
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state={
            expression:store.getState().calculatorStore
        }
    }
   changeNum(type,e){
       console.log(e.target.value)
       actionCreator.changePrev(type,e.target.value)
   }
   componentWillMount(){
       store.subscribe(()=>{
        console.log(store.getState())
       })
   }
    render(){

        
        let {prevNum,nextNum}=this.state.expression
        return(
            <div className='expression'>
               
                  <input type="text" onChange={this.changeNum.bind(this,'prev')} className='form-control' defaultValue={prevNum}/>
                  <button className="btn btn-default">+</button>
                  <input onChange={this.changeNum.bind(this,'next')} type="text" className='form-control' defaultValue={nextNum}/>
            </div>
        )
    }
}
export default Expression