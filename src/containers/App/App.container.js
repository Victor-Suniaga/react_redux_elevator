import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from './components/App.component'

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)