import React, { Component } from 'react';
import Router from '../src/router/router'
// import Home from './page/home/home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router></Router>
        {/* <Home></Home> */}
      </div>
    );
  }
}

export default App;
