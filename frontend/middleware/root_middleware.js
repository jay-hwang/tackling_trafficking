import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BlogMiddleware from './blog_middleware';
import CommentMiddleware from './comment_middleware';
import TagMiddleware from './tag_middleware';
import TaggingMiddleware from './tagging_middleware';
import SubscriptionMiddleware from './subscription_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BlogMiddleware,
  CommentMiddleware,
  TagMiddleware,
  TaggingMiddleware,
  SubscriptionMiddleware
);

export default RootMiddleware;
