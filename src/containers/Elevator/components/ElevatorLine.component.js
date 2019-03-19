import React, { Component } from 'react';
import { ElevatorFloor, StyledElevatorLine, LineContainer} from './common.component';

class ElevatorLine extends Component {
  render() {
    const numbers = [...Array(40).keys()]
    const listItems = numbers.map(number => {
        const key = (this.props.number * 10 ) + number;
        return (<ElevatorFloor key={key.toString()}>
            <StyledElevatorLine />
        </ElevatorFloor>)
    }
    );
    return (
      <LineContainer>
          { listItems }
      </LineContainer>
    );
  }
}

export default ElevatorLine;
