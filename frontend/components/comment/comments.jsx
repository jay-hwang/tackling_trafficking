import React from 'react';
import Comment from './comment';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.mapComments = this.mapComments.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.comments).length === 0) {
      this.props.requestComments(this.props.blog.id);
    }
  }

  mapComments(blog) {
    return Object.keys(this.props.comments).map((id, i) => (
      <li key={i}>
        <Comment blog={ blog }
          loggedIn={ this.props.loggedIn }
          currentUser={ this.props.currentUser }
          comment={ this.props.comments[id] }
          deleteComment={ this.props.deleteComment } />
      </li>
    ));
  }

  render() {
    let commentLis = this.mapComments(this.props.blog);

    return (
      <div className='comment'>
        <CommentFormContainer blog={ this.props.blog } />
        <h3 className='header'>COMMENTS</h3>
        <ul className='comments'>
          { commentLis }
        </ul>
      </div>
    );
  }
}

export default Comments;
