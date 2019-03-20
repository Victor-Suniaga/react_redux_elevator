import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Command from './components/Command.component';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    petitions: state.elev.petitions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Command)