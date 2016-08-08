import React, { PropTypes } from 'react'
import classes from './Post.scss'
import CommentItem from 'components/CommentItem'

class Post extends React.Component {
  static propTypes = {
    fetchPostComments: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { fetchPostComments, post, comments } = this.props;

    if (!comments.length > 0) {
      fetchPostComments(post);
    }
  }

  renderComments() {
    const { post, comments, isLoading, commentImageLoaded } = this.props;

    if (comments.length > 0) {
      return (
        <div>
          {comments.map( (comment, key) => (
            <CommentItem
              key={key}
              comment={comment}
              postId={post.id}
              commentImageLoaded={commentImageLoaded} />
          ))}
        </div>
      )
    }
    else if (isLoading) {
      return (
        <div className='loading-div'>
          <i className='fa fa-refresh fa-spin fa-4x'></i>
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
    const { post } = this.props;

    return (
      <div>
        <a href={post.permalinkUrl} target={'_blank'} >
          {this.props.post['title']}
        </a>
        {this.renderComments()}
      </div>
    )
  }
}

export default Post
