import { connect } from 'react-redux';
import Blogs from './blogs';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.session.currentUser.blogs,
  isUserBlogs: true
});

const mapDispatchToProps = dispatch => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
