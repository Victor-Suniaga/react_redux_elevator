import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from './components/App.component'
import { floorAsked } from '../../actions/elevator.actions';


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      floorAsked
    }, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    petitionsAsked: state.elev.petitions.length,
    elevator1: state.elev.elevator1,
    elevator2: state.elev.elevator2,
    elevator3: state.elev.elevator3,
    elevator4: state.elev.elevator4
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)