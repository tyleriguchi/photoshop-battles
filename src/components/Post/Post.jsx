import React, { PropTypes } from 'react'
// import classes from './Counter.scss'
import CommentItem from 'components/CommentItem';

class Post extends React.Component {
  static propTypes = {
    fetchPostComments: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { fetchPostComments, post, comments } = this.props;

    fetchPostComments(post);
  }
  renderComments() {
    const { comments } = this.props;

    if (comments.length > 0) {
      return (
        <div>
          {comments.map( (comment, idx) => (
            <CommentItem
              key={idx}
              comment={comment} />
          ))}
        </div>
      )
    }
    else {
      return (
        <div>
          {'No shops found :('}
        </div>
      )
    }
  }
  render() {
    const { comments } = this.props;

    return (
      <div>
        {this.props.post['title']}
        {this.renderComments()}
      </div>
    )
  }
}

export default Post
