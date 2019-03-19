import React, { Component } from 'react';
import { ElevatorBox, ElevatorSecContainer, Number } from './common.component';
import ElevatorLine from './ElevatorLine.component';

class ElevatorDuct extends Component {
  render() {
    return (
        <ElevatorSecContainer>
            <ElevatorLine number={this.props.number} />
            <ElevatorBox/>
            <Number>30</Number>
        </ElevatorSecContainer>
    );
  }
}

export default ElevatorDuct;
