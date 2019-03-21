import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Elevator from './components/Elevator.component';
import { getFloor, setFloor } from '../../actions/elevator.actions';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getFloor,
      setFloor
    }, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    petitionsAsked: state.elev.petitions.length,
    status: state.elev.elevator1
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Elevator)