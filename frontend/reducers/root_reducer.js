import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BlogReducer from './blog_reducer';
import CommentReducer from './comment_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  blogs: BlogReducer,
  comments: CommentReducer
});

export default RootReducer;
