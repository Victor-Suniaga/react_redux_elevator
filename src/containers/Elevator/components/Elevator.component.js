import React, { Component } from 'react';
import { ElevatorBox, ElevatorSecContainer, Number } from './common.component';
import ElevatorLine from './ElevatorLine.component';
import { timer, BehaviorSubject } from 'rxjs';
import { ELEVATOR_GET, ELEVATOR_SET } from '../../../constants/actions';

class Elevator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      currentFloor: 0,
      elevatorGet: ELEVATOR_GET + this.props.number,
      elevatorSet: ELEVATOR_SET + this.props.number,
    }
    this.elevatorStop = new BehaviorSubject(true);
  }
  componentDidMount() {
    this.elevatorStop.subscribe(stop => {
      if (stop) {
        if (this.props.status) {
          this.moveElevator()
        } else {
          this.getFloor()
        }
      }
    })
  }

  getFloor() {
    this.props.actions.getFloor(this.state.elevatorGet);
    timer(100).subscribe( _ => {
      (!this.props.status) ? this.getFloor() : this.elevatorStop.next(true)
    })
  }

  moveElevator( value = 0.1) {
    const timerVariable = timer(1000, 10).subscribe( _ => {
      const newValue = this.state.currentPosition + value;
      this.setState({
        currentPosition: newValue,
        currentFloor: Math.floor(newValue)
      });
      if (this.state.currentFloor === this.props.status.floor) {
        timerVariable.unsubscribe();
        (this.state.currentFloor === 0) ? this.getFloor() : this.goFirstFloor();
      }
    })
  }

  goFirstFloor() {
    this.props.actions.setFloor(this.state.elevatorSet, {
      people: 0,
      floor: 0,
      id: null
    });
    timer(100).subscribe( _ => {
      this.moveElevator(-0.1);
    })
  }

  render() {
    return (
        <ElevatorSecContainer>
            <ElevatorLine number={this.props.number} />
            <ElevatorBox height={`${this.state.currentPosition * 2}vh`}/>
            <Number>{this.state.currentFloor} { (this.props.status) ? this.props.status.floor : 0}</Number>
        </ElevatorSecContainer>
    );
  }
}

export default Elevator;
