import React from 'react'
import Expression from './Expression'
import './index.less'
import Result from './Result'
import actionCreator from '../../../store/calculatorStore/actionCreator'
class CalculatorContain extends React.Component{
    constructor(props){
        super(props)
    }
    sumNum(){
        actionCreator.sumNum()
    }
    render(){
        return(
            <div className="contain">
                <p>这里是计算器</p>
                <Expression></Expression>
                <button className='btn btn-dafault' onClick={this.sumNum}>=</button>
                <Result></Result>
            </div>
        )
    }
}
export default CalculatorContain