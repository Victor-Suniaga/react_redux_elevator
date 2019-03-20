import React, { Component } from 'react';
import { ElevatorContainer } from '../..';
import { AppMainContainer } from './common.component'
import CommandContainer from '../../Command/Command.container';

class App extends Component {
  render() {
    return (
      <AppMainContainer>
        <ElevatorContainer />
        <CommandContainer />
      </AppMainContainer>
    );
  }
}

export default App;
