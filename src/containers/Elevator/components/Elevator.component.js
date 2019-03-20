import React, { Component } from 'react';
import { ElevatorMainContainer } from './common.component';
import ElevatorDuct from './ElevatorDuct.component';

class Elevator extends Component {
  render() {
    return (
        <ElevatorMainContainer>
            <ElevatorDuct number={1} />
            <ElevatorDuct number={2}/>
            <ElevatorDuct number={3}/>
            <ElevatorDuct number={4}/>
        </ElevatorMainContainer>
    );
  }
}

export default Elevator;
