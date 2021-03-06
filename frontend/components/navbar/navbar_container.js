import { connect } from 'react-redux';
import Navbar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
