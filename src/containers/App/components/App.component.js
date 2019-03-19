import React, { Component } from 'react';
import logo from '../../../logo.svg';
import './App.component.css';
import { ElevatorContainer } from '../..';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ElevatorContainer />
      </div>
    );
  }
}

export default App;
