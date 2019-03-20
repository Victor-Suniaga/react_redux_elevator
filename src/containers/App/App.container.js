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
    petitionsAsked: state.elev.petitions.length
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)