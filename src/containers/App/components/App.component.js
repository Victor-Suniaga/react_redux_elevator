import React, { Component } from 'react';
import { ElevatorContainer } from '../..';
import { AppMainContainer, ElevatorMainContainer } from './common.component'
import CommandContainer from '../../Command/Command.container';
import { timer } from 'rxjs';

class App extends Component {

  componentDidMount() {
    timer(0, 2000).subscribe( id => {
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
            <ElevatorContainer number={1} />
        </ElevatorMainContainer>
        <CommandContainer />
      </AppMainContainer>
    );
  }
}

export default App;
