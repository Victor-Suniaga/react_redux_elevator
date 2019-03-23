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
    const listItems = this.props.elevators.map((elev, index) => {
      return (<ElevatorContainer key={index} number={index} status={elev} /> )
    })
    return (
      <AppMainContainer>
          <ElevatorMainContainer>
            {listItems}
        </ElevatorMainContainer>
        <CommandContainer />
      </AppMainContainer>
    );
  }
}

export default App;
