import React, { Component } from 'react';
import { ElevatorContainer } from '../..';
import { AppMainContainer, ElevatorMainContainer } from './common.component'
import CommandContainer from '../../Command/Command.container';
import { timer } from 'rxjs';

class App extends Component {

  componentDidMount() {
    timer(0, 1000).subscribe( id => {
      const floorAsked = {
        people: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
        floor: Math.floor(Math.random() * (40 - 1 + 1)) + 1,
        id: id
      }
      if (this.props.petitionsAsked < 40) {
        this.props.actions.floorAsked(floorAsked)
      }
    })
  }
  
  render() {
    return (
      <AppMainContainer>
          <ElevatorMainContainer>
            <ElevatorContainer number={1} status={this.props.elevator1} />
            <ElevatorContainer number={2} status={this.props.elevator2} />
            <ElevatorContainer number={3} status={this.props.elevator3} />
            <ElevatorContainer number={4} status={this.props.elevator4} />
        </ElevatorMainContainer>
        <CommandContainer />
      </AppMainContainer>
    );
  }
}

export default App;
