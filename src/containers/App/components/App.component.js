import React, { Component } from 'react';
import { ElevatorContainer } from '../..';
import { AppMainContainer } from './common.component'
import CommandContainer from '../../Command/Command.container';
import { timer } from 'rxjs';

class App extends Component {

  componentDidMount() {
    timer(0, 2000).subscribe( _ => {
      const people = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      const floor = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
      if (this.props.petitionsAsked < 40) {
        this.props.actions.floorAsked(people, floor)
      }
    })
  }
  
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
