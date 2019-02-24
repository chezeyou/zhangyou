import React, { Component } from 'react';
// import logo from './logo.svg';
import TodoList from './components/pages/TodoList/TodoContainer'
// import Bus from './components/pages/BusEvent/BusEvent'
// import  CalculatorContain from './components/pages/Calculator/CalculateContain'
class App extends Component {
  render() {
    return (
      <div className="App container">
          <TodoList></TodoList>
          <hr/>
          {/* <CalculatorContain></CalculatorContain> */}
      </div>
    );
  }
}

export default App;
